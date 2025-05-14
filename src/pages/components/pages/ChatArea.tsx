import { Image, ScrollArea } from "@mantine/core";
import React, { useState, useEffect, useRef } from "react";
import "./ChatArea.css";
import { getHistory, ClassifyPlant } from "../../../service/PlantsService";

interface Message {
    sender: "bot" | "user";
    type?: "text" | "image";
    text?: string;
    url?: string;
    time: string;
}

function ChatArea() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const chatBottomRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const historyData = await getHistory();
                if (historyData?.results) {
                    const formattedMessages: Message[] = historyData.results.map((item) => ({
                        sender: "bot" as const,
                        type: "image",
                        url: item.image,
                        text: `${item.plant_name} (${item.plant_label})${item.is_healthy ? ' - Sog\'lom' : ' - Kasal'}`,
                        time: new Date(item.created_at).toLocaleTimeString(),
                    }));
                    setMessages(formattedMessages);
                }
            } catch (error) {
                console.error("Xabar tarixini yuklashda xatolik:", error);
            }
        };

        loadHistory();
    }, []);

    useEffect(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const validateImage = (file: File): Promise<boolean> => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = e.target?.result as string;
            };
            reader.onerror = () => resolve(false);
            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check file type
            if (!file.type.startsWith('image/')) {
                alert("Iltimos, faqat rasm fayllarini yuklang");
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                return;
            }

            // Check file size (max 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            if (file.size > maxSize) {
                alert("Rasm hajmi juda katta. Iltimos, 5MB dan kichik rasm tanlang");
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                return;
            }

            // Validate image isn't corrupted
            const isValid = await validateImage(file);
            if (!isValid) {
                alert("Rasm fayli buzilgan yoki noto'g'ri formatda");
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                return;
            }

            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setSelectedImage(null);
            setImagePreview(null);
        }
    };

    const handleSendImage = async () => {
        if (selectedImage && imagePreview) {
            try {
                // Validate image again before sending
                const isValid = await validateImage(selectedImage);
                if (!isValid) {
                    alert("Rasm fayli buzilgan. Iltimos, qaytadan urinib ko'ring");
                    setSelectedImage(null);
                    setImagePreview(null);
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                    return;
                }

                const newMessage: Message = {
                    sender: "user",
                    type: "image",
                    url: imagePreview,
                    time: getCurrentTime(),
                };
                setMessages((prevMessages) => [...prevMessages, newMessage]);

                const formData = new FormData();
                formData.append("image", selectedImage, selectedImage.name);
                formData.append("mode", "classify");

                const response = await ClassifyPlant(formData);
                if (response) {
                    const botResponse: Message = {
                        sender: "bot",
                        type: "text",
                        text: `${response.plant_name} (${response.plant_label})${response.is_healthy ? ' - Sog\'lom' : ' - Kasal'}`,
                        time: getCurrentTime(),
                    };
                    setMessages((prevMessages) => [...prevMessages, botResponse]);
                } else {
                    throw new Error("Klassifikatsiya natijasi topilmadi");
                }
            } catch (error: any) {
                console.error("O'simlikni klassifikatsiya qilishda xatolik:", error.message);
                const errorResponse: Message = {
                    sender: "bot",
                    type: "text",
                    text: error.message.includes("413") 
                        ? "Rasm hajmi juda katta. Iltimos, kichikroq rasm yuklang."
                        : "Kechirasiz, rasmni qayta ishlashda xatolik yuz berdi. Iltimos, boshqa rasm bilan urinib ko'ring.",
                    time: getCurrentTime(),
                };
                setMessages((prevMessages) => [...prevMessages, errorResponse]);
            } finally {
                setSelectedImage(null);
                setImagePreview(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            }
        }
    };

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString();
    };

    return (
        <div className="chat-area">
            <ScrollArea h={700} type="scroll">
                <div className="message-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <div className="avatar">{msg.sender === "bot" ? "🌿" : "👤"}</div>
                            <div className="text-container">
                                {msg.type === "image" ? (
                                    <div className="image-message">
                                        <Image src={msg.url} alt="Yuklangan rasm" width={200} height="auto" />
                                        <div className="time">{msg.time}</div>
                                        {msg.text && <div className="text">{msg.text}</div>}
                                    </div>
                                ) : (
                                    <>
                                        <div className="text">{msg.text}</div>
                                        <div className="time">{msg.time}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={chatBottomRef} />
                </div>
            </ScrollArea>
            <div className="input-area">
                <div className="file-input-container">
                    <label className="file-input-label" htmlFor="image-upload">
                        {selectedImage ? '🖼️ Rasm tanlandi' : '📁 Rasm tanlang'}
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="selected-image-preview" />
                    )}
                </div>
                <button 
                    className="send-button" 
                    onClick={handleSendImage} 
                    disabled={!selectedImage}
                >
                    Yuborish
                </button>
            </div>
        </div>
    );
}

export default ChatArea;
import { Image, ScrollArea } from "@mantine/core";
import React, { useState, useEffect, useRef } from "react";
// import { getHistory, ClassifyPlant } from "../../api/api"; // Import qilingan API funksiyalari

interface Message {
  sender: "bot" | "user";
  type?: "text" | "image";
  text?: string;
  url?: string;
  time: string;
}

function ChatArea() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const historyData = await getHistory();
        if (historyData?.results) {
          const formattedMessages = historyData.results.map((item) => ({
            sender: "bot", // Tarixdagi xabarlar botdan kelgan deb faraz qilamiz
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setInputText("");
    }
  };

  const handleSendImage = async () => {
    if (selectedImage) {
      const newMessage = {
        sender: "user",
        type: "image",
        url: imagePreview,
        time: getCurrentTime(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setSelectedImage(null);
      setImagePreview(null);

      const formData = new FormData();
      formData.append("image", selectedImage, selectedImage.name);
      formData.append("mode", "classify"); // Agar serverga mode kerak bo'lsa

      const classifyRequest = {
        mode: "classify",
        formdata: [
          {
            key: "image",
            type: "file",
            src: imagePreview!, // imagePreview null bo'lmasligi kerak
          },
        ],
      };

      try {
        const response = await ClassifyPlant(classifyRequest);
        if (response) {
          const botResponse = {
            sender: "bot",
            type: "text",
            text: `${response.plant_name} (${response.plant_label})${response.is_healthy ? ' - Sog\'lom' : ' - Kasal'}`,
            time: getCurrentTime(),
          };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        } else {
          const errorResponse = {
            sender: "bot",
            type: "text",
            text: "Kechirasiz, o'simlikni aniqlashda xatolik yuz berdi.",
            time: getCurrentTime(),
          };
          setMessages((prevMessages) => [...prevMessages, errorResponse]);
        }
      } catch (error: any) {
        console.error("O'simlikni klassifikatsiya qilishda xatolik:", error.message);
        const errorResponse = {
          sender: "bot",
          type: "text",
          text: "Kechirasiz, server bilan bog'lanishda xatolik yuz berdi.",
          time: getCurrentTime(),
        };
        setMessages((prevMessages) => [...prevMessages, errorResponse]);
      }
    } else {
      alert("Iltimos, avval rasm tanlang!");
    }
  };


  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="chat-area">
      <ScrollArea h={700} scrollY>
        <div className="message-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="avatar">{msg.sender === "bot" ? "🤖" : "👤"}</div>
              <div className="text-container">
                {msg.type === "image" ? (
                  <div className="image-message">
                    <Image src={msg.url} alt="Yuborilgan rasm" width={200} height="auto" />
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
          <div ref={chatBottomRef} /> {/* Chatni pastga o'tkazish uchun marker */}
        </div>
      </ScrollArea>
      <div className="input-area">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button className="send-button" onClick={handleSendImage} disabled={!selectedImage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatArea;

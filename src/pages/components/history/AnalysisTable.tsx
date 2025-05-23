import { Image, ScrollArea, Table, Modal, Paper } from "@mantine/core";
import { useState, useEffect } from "react";
import './AnalysisTable.css'
import { getHistory } from "../../../service/PlantsService";
import { useTranslation } from 'react-i18next';

interface Message {
    sender: "bot" | "user";
    type?: "text" | "image";
    text?: string;
    url?: string;
    time: string;
    plantName?: string;
    plantLabel?: string;
    isHealthy?: boolean;
}

function AnalysisTable() {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const historyData = await getHistory();
                if (historyData?.results) {
                    const formattedMessages: Message[] = historyData.results.map((item) => ({
                        sender: "bot" as const,
                        type: "image",
                        url: item.image,
                        text: `${item.plant_name} (${item.plant_label})${item.is_healthy ? ` - ${t('Healthy')}` : ` - ${t('Diseased')}`}`,
                        time: new Date(item.created_at).toLocaleTimeString(),
                        plantName: item.plant_name,
                        plantLabel: item.plant_label,
                        isHealthy: item.is_healthy,
                    }));
                    setMessages(formattedMessages);
                }
            } catch (error) {
                console.error("Xabar tarixini yuklashda xatolik:", error);
            }
        };

        loadHistory();
    }, []);    // No additional effects or handlers needed for history view

    return (
        <Paper shadow="sm" radius="md" p="md">
            <ScrollArea h={500}>
                <Table striped highlightOnHover>                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>{t('Image')}</Table.Th>
                            <Table.Th>{t('Plant Name')}</Table.Th>
                            <Table.Th>{t('Status')}</Table.Th>
                            <Table.Th>{t('Time')}</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {messages.map((message, index) => (
                            <Table.Tr 
                                key={index} 
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setSelectedMessage(message);
                                    setIsModalOpen(true);
                                }}
                            >
                                <Table.Td>
                                    <Image 
                                        src={message.url} 
                                        width={30} 
                                        height={30} 
                                        fit="cover"
                                        radius="sm"
                                        className="analysis-image"
                                        style={{maxWidth:"100px",height:"100px"}}
                                    />
                                </Table.Td>
                                <Table.Td>{message.plantName}</Table.Td>
                                <Table.Td>{message.isHealthy ? 'Sog\'lom' : 'Kasal'}</Table.Td>
                                <Table.Td>{message.time}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </ScrollArea>                <Modal 
                    opened={isModalOpen} 
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedMessage(null);
                    }}                    size="md"
                    title={t('Plant Details')}
                    centered
                    styles={{
                        inner: { 
                            padding: '20px',
                        },
                        body: {
                            maxHeight: 'calc(90vh - 100px)',
                            overflowY: 'auto'
                        },
                        header: {
                            position: 'sticky',
                            top: 0,
                            backgroundColor: 'var(--mantine-color-body)',
                            zIndex: 1000,
                            borderBottom: '1px solid var(--mantine-color-gray-3)'
                        }
                    }}
                >
                    {selectedMessage && (
                        <div className="analysis-details">
                            <Paper shadow="sm" p="lg" className="analysis-image">
                                <Image 
                                    src={selectedMessage.url} 
                                    alt="O'simlik rasmi" 
                                    width={350} 
                                    height={250} 
                                    fit="contain"
                                />
                            </Paper>
                            <Paper shadow="sm" p="lg" className="analysis-info">                                <h3>{selectedMessage.plantName}</h3>
                                <p>{t('Type')}: {selectedMessage.plantLabel}</p>
                                <p>{t('Status')}: {selectedMessage.isHealthy ? 
                                    <span style={{ color: '#40c057' }}>{t('Healthy')}</span> : 
                                    <span style={{ color: '#fa5252' }}>{t('Diseased')}</span>
                                }</p>
                                <p>{t('Time')}: {selectedMessage.time}</p>
                            </Paper>
                        </div>
                    )}</Modal>
        </Paper>
    );
}

export default AnalysisTable;
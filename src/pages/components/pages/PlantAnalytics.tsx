import React, { useEffect, useState } from "react";
import { Container, Title, Grid, Paper, Text } from "@mantine/core";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from "recharts";
import "./PlantAnalytics.css";

interface DashboardData {
    summary: {
        total_uploads: number;
        healthy_plants: number;
        diseased_plants: number;
    };
    common_diseases: {
        disease: string;
        count: number;
    }[];
    plant_distribution: {
        plant_type: string;
        total: number;
        healthy: number;
        diseased: number;
    }[];
    hourly_uploads: {
        hour: string;
        total: number;
        healthy: number;
        diseased: number;
    }[];
}

const PlantAnalytics: React.FC = () => {
    const [data, setData] = useState<DashboardData | null>(null);    useEffect(() => {
        const token = localStorage.getItem("access");
        fetch("https://agroai.social/api/plants/dashboard/", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching dashboard data:', error));
    }, []);

    if (!data) return <div>Loading...</div>;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

    const formatHour = (hour: string) => {
        return new Date(hour).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    return (
        <Container size="xl">
            <Title style={{ textAlign: 'center', marginBottom: '1rem' }}>
                O'simlik Analitikasi
            </Title>
            <Grid gutter="md">
                {/* Summary Cards */}
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="sm">
                            Jami Yuklangan
                        </Text>
                        <Text ta="center" fz={24} c="blue">
                            {data.summary.total_uploads}
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="sm">
                            Sog'lom O'simliklar
                        </Text>
                        <Text ta="center" fz={24} c="green">
                            {data.summary.healthy_plants}
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="sm">
                            Kasallangan O'simliklar
                        </Text>
                        <Text ta="center" fz={24} c="red">
                            {data.summary.diseased_plants}
                        </Text>
                    </Paper>
                </Grid.Col>

                {/* Disease Distribution */}
                <Grid.Col span={6}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="md">
                            Kasalliklar Taqsimoti
                        </Text>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={data.common_diseases}
                                        dataKey="count"
                                        nameKey="disease"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label={(entry) => entry.disease}
                                    >
                                        {data.common_diseases.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Paper>
                </Grid.Col>

                {/* Plant Distribution */}
                <Grid.Col span={6}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="md">
                            O'simliklar Taqsimoti
                        </Text>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={data.plant_distribution}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="plant_type" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="healthy" fill="#00C49F" name="Sog'lom" />
                                    <Bar dataKey="diseased" fill="#FF8042" name="Kasallangan" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Paper>
                </Grid.Col>

                {/* Hourly Uploads */}
                <Grid.Col span={12}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <Text ta="center" fz="xl" fw={500} mb="md">
                            Soatlik Yuklashlar
                        </Text>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <AreaChart data={data.hourly_uploads}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis 
                                        dataKey="hour" 
                                        tickFormatter={formatHour}
                                    />
                                    <YAxis />
                                    <Tooltip 
                                        labelFormatter={(label) => formatHour(label as string)}
                                    />
                                    <Legend />
                                    <Area
                                        type="monotone"
                                        dataKey="healthy"
                                        stackId="1"
                                        stroke="#00C49F"
                                        fill="#00C49F"
                                        name="Sog'lom"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="diseased"
                                        stackId="1"
                                        stroke="#FF8042"
                                        fill="#FF8042"
                                        name="Kasallangan"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default PlantAnalytics;

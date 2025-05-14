import React from "react";
import { Container, Title, Grid, Paper, Text } from "@mantine/core";
import "./PlantAnalytics.css";

const PlantAnalytics: React.FC = () => {
    const staticGrowthData = [
        { month: 1, height: 10 },
        { month: 2, height: 25 },
        { month: 3, height: 40 },
        { month: 4, height: 50 },
        { month: 5, height: 55 },
    ];
    const healthScore = 85;
    const nitrogenLevel = 75;
    const phosphorusLevel = 60;
    const potassiumLevel = 80;
    const calciumLevel = 70;

    // Growth kichik grafik
    const GrowthChart = ({
        growthData,
    }: {
        growthData: { month: number; height: number }[];
    }) => {
        const chartWidth = 150;
        const chartHeight = 100;
        const padding = 10;
        const maxHeight = 60;
        const xScale = (month: number) =>
            padding +
            (chartWidth - 2 * padding) *
                ((month - 1) / (growthData.length - 1 || 1));
        const yScale = (height: number) =>
            chartHeight -
            padding -
            (chartHeight - 2 * padding) * (height / maxHeight);
        const linePath = growthData
            .map(
                (item, index) =>
                    `${index === 0 ? "M" : "L"} ${xScale(item.month)} ${yScale(item.height)}`
            )
            .join(" ");

        return (
            <div className="small-chart-container">
                <Text size="sm" weight={500} mb="xs">
                    O'sish
                </Text>
                <svg width={chartWidth} height={chartHeight}>
                    <line
                        x1={padding}
                        y1={padding}
                        x2={padding}
                        y2={chartHeight - padding}
                        stroke="#ccc"
                    />
                    <line
                        x1={padding}
                        y1={chartHeight - padding}
                        x2={chartWidth - padding}
                        y2={chartHeight - padding}
                        stroke="#ccc"
                    />
                    <path
                        d={linePath}
                        stroke="#ffc107"
                        strokeWidth="2"
                        fill="none"
                    />
                    {growthData.map((item) => (
                        <circle
                            key={item.month}
                            cx={xScale(item.month)}
                            cy={yScale(item.height)}
                            r={3}
                            fill="#ffc107"
                        />
                    ))}
                </svg>
            </div>
        );
    };

    // Health kichik grafik
    const HealthChart = ({ score }: { score: number }) => {
        const size = 80;
        const strokeWidth = 8;
        const center = size / 2;
        const radius = center - strokeWidth / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 100) * circumference;
        const color =
            score > 70 ? "#4CAF50" : score > 40 ? "#ffc107" : "#f44336";

        return (
            <div className="small-chart-container">
                <Text size="sm" weight={500} mb="xs">
                    Sog'lomlik
                </Text>
                <svg width={size} height={size}>
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#f0f0f0"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(-90 ${center} ${center})`}
                        style={{
                            transition: "stroke-dashoffset 0.3s ease-out",
                        }}
                    />
                    <text
                        x={center}
                        y={center + 5}
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight={500}
                    >
                        {score}%
                    </text>
                </svg>
            </div>
        );
    };

    // Nutrient kichik grafik
    const NutrientChart = ({
        nitrogen,
        phosphorus,
        potassium,
        calcium,
    }: {
        nitrogen: number;
        phosphorus: number;
        potassium: number;
        calcium: number;
    }) => {
        const size = 80;
        const center = size / 2;
        const radius = center - 10;

        const getPoint = (angle: number, value: number) => {
            const radAngle = ((angle - 90) * Math.PI) / 180;
            const x = center + radius * (value / 100) * Math.cos(radAngle);
            const y = center + radius * (value / 100) * Math.sin(radAngle);
            return `${x},${y}`;
        };

        const points = [
            getPoint(0, nitrogen),
            getPoint(72, phosphorus),
            getPoint(144, potassium),
            getPoint(216, calcium),
            getPoint(288, nitrogen), // Poligonni yopish
        ].join(" ");

        return (
            <div className="small-chart-container">
                <Text size="sm" weight={500} mb="xs">
                    Oziq Moddalar
                </Text>
                <svg width={size} height={size}>
                    <polygon
                        points={points}
                        fill="#8ab4f8"
                        opacity="0.6"
                        stroke="#3f83f8"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        );
    };

    return (
        <Container>
            <Title align="center" my="md">
                O'simlik Analitikasi
            </Title>
            <Grid gutter="md">
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <GrowthChart growthData={staticGrowthData} />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <HealthChart score={healthScore} />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xs" p="md" className="grid-item">
                        <NutrientChart
                            nitrogen={nitrogenLevel}
                            phosphorus={phosphorusLevel}
                            potassium={potassiumLevel}
                            calcium={calciumLevel}
                        />
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default PlantAnalytics;

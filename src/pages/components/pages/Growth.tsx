import React from "react";
import "./Growth.css";

interface GrowthProjectionProps {
    growthData: { month: number; height: number }[];
}

const Growth: React.FC<GrowthProjectionProps> = ({ growthData }) => {
    const chartWidth = 300;
    const chartHeight = 200;
    const padding = 20;

    // O'sish ma'lumotlaridan maksimal balandlikni aniqlash
    const maxHeight = Math.max(...growthData.map((item) => item.height), 60); // Maksimal Y o'qi qiymati

    // X va Y o'qlari uchun shkalani hisoblash
    const xScale = (month: number) =>
        padding +
        (chartWidth - 2 * padding) *
            ((month - 1) / (growthData.length - 1 || 1));
    const yScale = (height: number) =>
        chartHeight -
        padding -
        (chartHeight - 2 * padding) * (height / maxHeight);

    // Chiziq uchun yo'lni yaratish
    const linePath = growthData
        .map(
            (item, index) =>
                `${index === 0 ? "M" : "L"} ${xScale(item.month)} ${yScale(item.height)}`
        )
        .join(" ");

    return (
        <div className="growth-projection-container">
            <h2>Growth Projection</h2>

            <div className="growth-chart">
                <svg width={chartWidth} height={chartHeight}>
                    {/* Y o'qi */}
                    <line
                        x1={padding}
                        y1={padding}
                        x2={padding}
                        y2={chartHeight - padding}
                        stroke="#ccc"
                    />
                    {/* X o'qi */}
                    <line
                        x1={padding}
                        y1={chartHeight - padding}
                        x2={chartWidth - padding}
                        y2={chartHeight - padding}
                        stroke="#ccc"
                    />

                    {/* Y o'qi belgilari */}
                    {[0, 15, 30, 45, 60].map((height) => (
                        <g key={height}>
                            <line
                                x1={padding - 5}
                                y1={yScale(height)}
                                x2={padding}
                                y2={yScale(height)}
                                stroke="#eee"
                            />
                            <text
                                x={padding - 10}
                                y={yScale(height) + 3}
                                fontSize="10"
                                textAnchor="end"
                            >
                                {height}
                            </text>
                        </g>
                    ))}
                    <text
                        x={padding - 30}
                        y={padding + 10}
                        fontSize="10"
                        textAnchor="middle"
                        transform={`rotate(-90 ${padding - 30} ${padding + 10})`}
                    >
                        Height (cm)
                    </text>

                    {/* X o'qi belgilari */}
                    {growthData.map((item) => (
                        <g key={item.month}>
                            <line
                                x1={xScale(item.month)}
                                y1={chartHeight - padding}
                                x2={xScale(item.month)}
                                y2={chartHeight - padding + 5}
                                stroke="#eee"
                            />
                            <text
                                x={xScale(item.month)}
                                y={chartHeight - padding + 15}
                                fontSize="10"
                                textAnchor="middle"
                            >
                                {item.month}
                            </text>
                        </g>
                    ))}
                    <text
                        x={chartWidth / 2}
                        y={chartHeight - 5}
                        fontSize="10"
                        textAnchor="middle"
                    >
                        Month
                    </text>

                    {/* Chiziq */}
                    <path
                        d={linePath}
                        stroke="#ffc107"
                        strokeWidth="2"
                        fill="none"
                    />

                    {/* Nuqtalar */}
                    {growthData.map((item) => (
                        <circle
                            key={item.month}
                            cx={xScale(item.month)}
                            cy={yScale(item.height)}
                            r={5}
                            fill="#ffc107"
                        />
                    ))}

                    {/* Ajratilgan nuqta (3-oy) */}
                    {growthData.find((item) => item.month === 3) && (
                        <circle
                            cx={xScale(3)}
                            cy={yScale(
                                growthData.find((item) => item.month === 3)!
                                    .height
                            )}
                            r={8}
                            fill="#ffca28"
                        />
                    )}
                </svg>
            </div>

            <div className="growth-table">
                <h2>Growth Projection</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            {growthData.map((item) => (
                                <th key={item.month}>{item.month}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Height (cm)</th>
                            {growthData.map((item) => (
                                <td key={`height-${item.month}`}>
                                    {item.height}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Growth;

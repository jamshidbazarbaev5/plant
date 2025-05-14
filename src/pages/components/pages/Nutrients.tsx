import React from "react";
import "./Nutrient.css"; 

interface NutrientLevelsProps {
    nitrogenLevel: number;
    phosphorusLevel: number;
    potassiumLevel: number;
    calciumLevel: number;
}

const Nutrient: React.FC<NutrientLevelsProps> = ({
    nitrogenLevel,
    phosphorusLevel,
    potassiumLevel,
    calciumLevel,
}) => {
    // Radar grafik uchun nuqtalarni hisoblash (oddiy ko'rinish)
    const center = 60;
    const radius = 50;

    const getPoint = (angle: number, value: number): { x: number; y: number } => {
        const radAngle = ((angle - 90) * Math.PI) / 180;
        const x = center + radius * (value / 100) * Math.cos(radAngle);
        const y = center + radius * (value / 100) * Math.sin(radAngle);
        return { x, y };
    };

    const nitrogenPoint = getPoint(0, nitrogenLevel);
    const phosphorusPoint = getPoint(72, phosphorusLevel);
    const potassiumPoint = getPoint(144, potassiumLevel);
    const calciumPoint = getPoint(216, calciumLevel);
    const fifthPoint = getPoint(288, nitrogenLevel); // Poligonni yopish uchun

    const polygonPoints = `${nitrogenPoint.x},${nitrogenPoint.y} ${phosphorusPoint.x},${phosphorusPoint.y} ${potassiumPoint.x},${potassiumPoint.y} ${calciumPoint.x},${calciumPoint.y} ${fifthPoint.x},${fifthPoint.y}`;

    return (
        <div className="nutrient-levels-container">
            <h2>Nutrient Levels</h2>

            <div className="radar-chart">
                <svg width="120" height="120">
                    <polygon
                        points={polygonPoints}
                        fill="#8ab4f8"
                        opacity="0.6"
                        stroke="#3f83f8"
                        strokeWidth="2"
                    />
                    {/* O'qlar va yozuvlar (oddiy ko'rinish) */}
                    <line
                        x1={center}
                        y1={center}
                        x2={center + radius}
                        y2={center}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                    <text
                        x={center + radius + 5}
                        y={center}
                        fontSize="8"
                        textAnchor="start"
                    >
                        Nitrogen
                    </text>

                    <line
                        x1={center}
                        y1={center}
                        x2={getPoint(72, 100).x}
                        y2={getPoint(72, 100).y}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                    <text
                        x={getPoint(72, 100).x}
                        y={getPoint(72, 100).y + 5}
                        fontSize="8"
                        textAnchor="middle"
                    >
                        Phosphorus
                    </text>

                    <line
                        x1={center}
                        y1={center}
                        x2={getPoint(144, 100).x}
                        y2={getPoint(144, 100).y}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                    <text
                        x={getPoint(144, 100).x - 5}
                        y={getPoint(144, 100).y + 5}
                        fontSize="8"
                        textAnchor="end"
                    >
                        Potassium
                    </text>

                    <line
                        x1={center}
                        y1={center}
                        x2={getPoint(216, 100).x}
                        y2={getPoint(216, 100).y}
                        stroke="#ccc"
                        strokeWidth="1"
                    />
                    <text
                        x={getPoint(216, 100).x - 5}
                        y={getPoint(216, 100).y - 3}
                        fontSize="8"
                        textAnchor="end"
                    >
                        Calcium
                    </text>

                    {/* Markaziy chiziqlar */}
                    <line
                        x1={center - radius}
                        y1={center}
                        x2={center + radius}
                        y2={center}
                        stroke="#eee"
                        strokeWidth="0.5"
                    />
                    <line
                        x1={center}
                        y1={center - radius}
                        x2={center}
                        y2={center + radius}
                        stroke="#eee"
                        strokeWidth="0.5"
                    />
                </svg>
            </div>

            <div className="nutrient-levels-grid">
                <div className="nutrient-card">
                    <div className="nutrient-value">{nitrogenLevel}%</div>
                    <div className="nutrient-label">Nitrogen</div>
                </div>
                <div className="nutrient-card">
                    <div className="nutrient-value">{phosphorusLevel}%</div>
                    <div className="nutrient-label">Phosphorus</div>
                </div>
                <div className="nutrient-card">
                    <div className="nutrient-value">{potassiumLevel}%</div>
                    <div className="nutrient-label">Potassium</div>
                </div>
                <div className="nutrient-card">
                    <div className="nutrient-value">{calciumLevel}%</div>
                    <div className="nutrient-label">Calcium</div>
                </div>
            </div>
        </div>
    );
};

export default Nutrient;

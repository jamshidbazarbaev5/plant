import { useState } from "react";

export default function Health() {
    const healthScore = useState(85)[0];
    const estimatedAgeDays = useState(30)[0];
    const confidencePercentage = useState(92)[0];

    return (
        <div className="health-metrics-container">
            <div className="health-metrics">
                <h2>Health Metrics</h2>
                <div className="metric-card">
                    <div className="metric-value">{healthScore}</div>
                    <div className="metric-label">Health Score</div>
                </div>
                <div className="metric-card">
                    <div className="metric-value">{estimatedAgeDays} days</div>
                    <div className="metric-label">Estimated Age</div>
                </div>
                {/* Agar "Flowering" va "92% Confidence" ham kerak bo'lsa, ularni ham qo'shishingiz mumkin */}
                <div className="metric-card">
                    <div className="metric-label">Flowering</div>
                    <div className="metric-value">Growth Stage</div>{" "}
                    {/* Haqiqiy qiymatni dinamik tarzda bering */}
                </div>
                <div className="metric-card">
                    <div className="metric-value">{confidencePercentage}%</div>
                    <div className="metric-label">Confidence</div>
                </div>
            </div>

            <div className="health-score-visual">
                <h2>Health Score</h2>
                {/* Bu yerda grafik komponenti bo'lishi mumkin.
           Oddiy ko'rinish uchun progress bar yoki aylana shaklini tasvirlaymiz. */}
                <div className="health-circle">
                    <div
                        className="progress-circle"
                        style={{
                            background: `conic-gradient(
                #4CAF50 ${healthScore * 3.6}deg,
                #f0f0f0 ${healthScore * 3.6}deg 360deg
              )`,
                        }}
                    >
                        <div className="inner-circle">{healthScore}%</div>
                    </div>                    <div className="health-label">{healthScore}%</div>
                </div>
            </div>
        </div>
    );
}

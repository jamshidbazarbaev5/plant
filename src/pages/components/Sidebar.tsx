import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useTranslation } from "react-i18next";

function Sidebar() {
    const { t } = useTranslation();

    return (
        <div className="sidebar">
            <div className="logo">{t("AIPlants")}</div>
            <ul className="menu">
                <NavLink to="/chatbot" className="link-styles">
                    <span className="icon">🌱</span> {t("Dashboard")}
                </NavLink>
                <NavLink to="/history" className="link-styles">
                    <span className="icon">⏱️</span> {t("History")}
                </NavLink>

                <NavLink to="/analisis" className="link-styles">
                    <span className="icon">📈</span> {t("Analysis")}
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
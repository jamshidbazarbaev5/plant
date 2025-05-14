import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useTranslation } from "react-i18next";

function Sidebar() {
    const { t } = useTranslation();
    const goToHome = () => {
        window.location.href = "/";
    }

    return (
        <div className="sidebar">
            <div className="logo" onClick={goToHome}> {t("AIPlants")}</div>            <ul className="menu">
                <NavLink to="/dashboard" className="link-styles">
                    <span className="icon">🌱</span> {t("Dashboard")}
                </NavLink>
                <NavLink to="/dashboard/history" className="link-styles">
                    <span className="icon">⏱️</span> {t("History")}
                </NavLink>
                <NavLink to="/dashboard/analytics" className="link-styles">
                    <span className="icon">📈</span> {t("Analysis")}
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
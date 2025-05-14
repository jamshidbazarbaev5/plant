import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import History from "./components/history/History.tsx";
import PlantAssistant from "./components/PlantAssistant.tsx";
import "./Dashboard.css";
import "./components/TopBar.css";
import PlantAnalytics from "./components/pages/PlantAnalytics";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import { ColorSchemeSwitcher } from "../components/ColorSchemeSwitcher/ColorSchemeSwitcher";
import '../i18n/i18n';

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="content">                <div className="top-bar">
                    <div className="top-bar-items">
                        <ColorSchemeSwitcher />
                        <LanguageSelector />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

function Dashboard() {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<PlantAssistant />} />
                <Route path="/history" element={<History />} />
                <Route path="/analytics" element={<PlantAnalytics />} />
            </Routes>
        </DashboardLayout>
    );
}

export default Dashboard;

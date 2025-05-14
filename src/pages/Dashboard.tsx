import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import History from "./components/history/History.tsx";
import PlantAssistant from "./components/PlantAssistant.tsx";
import "./Dashboard.css";
import PlantAnalytics from "./components/pages/PlantAnalytics";

function Dashboard() {

   

    return (
        <div className="app-container">
            <Sidebar />
            <div className="content">
               
                <Routes>
                    <Route path="/chatbot/" element={<PlantAssistant />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/analisis" element={<PlantAnalytics />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;

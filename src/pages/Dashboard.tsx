import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import History from "./components/history/History.tsx";
import PlantAssistant from "./components/PlantAssistant.tsx";
import "./Dashboard.css";
import { useTranslation } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlantAnalytics from "./components/pages/PlantAnalytics";

function Dashboard() {
    

    const queryClient = new QueryClient();

    return (
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <div className="app-container">
                        <Sidebar />
                        <div className="content">
                            <div className="headerApp">
                               

                                <div className="bottom-actions">
                                    <button className="logout">
                                        <span className="icon">➡️</span>{" "}
                                        {"Logout"}
                                    </button>
                                </div>
                            </div>

                            <Routes>
                                <Route
                                    path="/chatbot/"
                                    element={<PlantAssistant />}
                                />
                                <Route
                                    path="/history"
                                    element={<History />}
                                />
                                <Route
                                    path="/analisis"
                                    element={<PlantAnalytics />}
                                />
                            </Routes>
                        </div>
                    </div>
                </MantineProvider>
            </QueryClientProvider>
        </React.StrictMode>
    );
}

export default Dashboard;

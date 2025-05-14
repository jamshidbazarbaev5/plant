import { Route, Routes } from "react-router-dom";
import LoginForm from "./auth/login/Login";
import "./styles/style.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { getMe, refreshToken } from "./service/AuthService";
import { ColorSchemeSwitcher } from "./components/ColorSchemeSwitcher/ColorSchemeSwitcher";
import { PrivateRoute } from "./pages/PrivateRoute";
import Dashboard  from "./pages/Dashboard.tsx";
import History from "./pages/components/history/History"
import PlantAssistant from "./pages/components/PlantAssistant"
import PlantAnalytics from "./pages/components/pages/PlantAnalytics.tsx";
import Register from "./pages/components/pages/Register.tsx";

export const App = () => {

  const { isAuth, refetch } = useAuth();

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [isAuth, refetch]);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const data = await refreshToken();
        if (data) {
          localStorage.setItem("access", data.access);
          await getMe();
        }
      } catch (error) {
        console.error("Authentication failed", error);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      }
    };

    initAuth();
  }, []);

  return (
    <div className="App">
      <div style={{ position: "absolute", top: 24, right: 92, zIndex: 100 }}>
        <ColorSchemeSwitcher />
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/asistant/*" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/chatbot" element={<PlantAssistant />} />
             <Route path="/analisis" element={<PlantAnalytics />} />

          </Route>
        </Route>
      </Routes>
    </div>
  );
};

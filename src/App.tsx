import { Route, Routes, useLocation } from "react-router-dom";
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
import Register from "./pages/components/pages/Register.tsx";

export const App = () => {

  const { isAuth, refetch } = useAuth();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

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
      {!isDashboard && (
        <div style={{ position: "absolute", top: 24, right: 92, zIndex: 100 }}>
          <ColorSchemeSwitcher />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Route>
        
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

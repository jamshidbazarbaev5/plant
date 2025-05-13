import { Route, Routes } from "react-router-dom"
import LoginForm from "./auth/login/Login"
import "./styles/style.css"
import { Layout } from "./layout/Layout"
import { Home } from "./pages/Home"

export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login/*" element={<LoginForm />}/>
        </Route>
      </Routes>
    </div>
  )
}



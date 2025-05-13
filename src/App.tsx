// import { Route, Routes } from "react-router-dom"
import { Hero } from "./components/hero/Hero"
import { Main } from "./components/main/Main"
import { Navbar } from "./components/navbar/Navbar"
import { OurService } from "./components/our-servise/OurService"
import { Section } from "./components/section/Section"
// import LoginForm from "./auth/login/Login"
import { Feedback } from "./components/feedback/Feedback"
import { Footer } from "./components/footer/Footer"
import "./styles/style.css"

export const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <OurService />
      <Section />
      <Feedback />
      <Footer />
    </div>
  )
}



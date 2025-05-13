import { Hero } from "./components/hero/Hero"
import { Main } from "./components/main/Main"
import { Navbar } from "./components/navbar/Navbar"
import { OurService } from "./components/our-servise/OurService"

export const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <OurService />
    </>
  )
}



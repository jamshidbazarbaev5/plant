import { Feedback } from "../components/feedback/Feedback"
import { Hero } from "../components/hero/Hero"
import { Main } from "../components/main/Main"
import { OurService } from "../components/our-servise/OurService"
import { Section } from "../components/section/Section"


export const Home = () => {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
  
        <section id="about">
          <Main />
        </section>
  
        <section id="service">
          <OurService />
        </section>
  
        <section id="section">
          <Section />
        </section>
  
        <section id="feedback">
          <Feedback />
        </section>
      </>
    )
  }
  



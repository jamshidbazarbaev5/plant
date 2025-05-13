import { Flex } from "@mantine/core"
import "./Section.css"


export const Section = () => {
  return (
    <Flex className="section" direction='column'>
        <div className="section_overlay"></div>
        <div className="section_text">
            <h1 className="section_title">“Hár bir ósimlik - bul tábiyaattıń ózi jaratqan shıpası bolıp tabıladı.”</h1>
            <p className="section-desc">Abu Ali Ibn Sino</p>
        </div>
    </Flex>
  )
}



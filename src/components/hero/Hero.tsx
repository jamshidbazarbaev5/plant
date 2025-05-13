import { Flex } from "@mantine/core"
import "./Hero.css"
import { Link } from "react-router-dom"
import AI from "../../assets/ai.jpg"


export const Hero = () => {
  return (
    <Flex className="hero">
      <Flex className="hero_inner" justify='space-between'>
        <Flex className="hero_left" direction="column" gap={20}>
          <h1 className="hero_title">
            Assalawma aleykum, Agro AI saytına xosh kelipsiz!
          </h1>
          <p className="hero_desc">
            Bul sayt sizge eginlerińizdiń kesellik túrlerin online anıqlawıńız ushın járdem beredi!
          </p>
          <Link to="#" className="hero_btn">Kesellikti anıqlaw</Link>
        </Flex>
        <Flex className="hero_right">
          <img src={AI} alt="" className="hero-image" />
        </Flex>
      </Flex>
    </Flex>
  )
}


import { Flex } from "@mantine/core"
import "./Hero.css"
import { Link } from "react-router-dom"
import AI from "../../assets/ai.jpg"
import { motion } from "framer-motion"
import { useAuth } from "../../hooks/useAuth"

export const Hero = () => {
  const { isAuth } = useAuth()
  
  return (
    <Flex className="hero">
      <motion.div
        className="hero_inner"
        initial={{ opacity: 0 }} // Boshlang'ich holat
        animate={{ opacity: 0.9 }} // Yoxud animatsiya holati
        transition={{ duration: 1 }} // Animatsiyaning davomiyligi
      >
        <Flex justify="space-between">
          <motion.div
            className="hero_left"
            initial={{ opacity: 0, y: 50 }} // Yashirin holat (pastda)
            animate={{ opacity: 1, y: 0 }} // Aniq holat
            transition={{ duration: 1 }} // Animatsiya davomiyligi
          >
            <h1 className="hero_title">
              Assalawma aleykum, Agro AI saytına xosh kelipsiz!
            </h1>
            <p className="hero_desc">
              Bul sayt sizge eginlerińizdiń kesellik túrlerin online anıqlawıńız ushın járdem beredi!
            </p>
            
            <Link to={isAuth ? "/asistant" : "/login"} className="hero_btn">Kesellikti anıqlaw</Link>
          </motion.div>

          <motion.div
            className="hero_right"
            initial={{ opacity: 0, x: 80, zIndex: 10 }} // Yashirin holat (o'ngda)
            animate={{ opacity: 1, x: 0, zIndex: 10 }} // Animatsiyali holat (markazga)
            transition={{ duration: 1, delay: 0.5 }} // Keyingi animatsiya uchun kechikish
          >
            <img style={{zIndex: 10}} src={AI} alt="" className="hero-image" />
          </motion.div>
        </Flex>
      </motion.div>
    </Flex>
  )
}

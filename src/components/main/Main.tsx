import { Flex } from "@mantine/core"
import { motion } from "framer-motion" 
import Image from "../../assets/Rectangle 4.png"
import "./Main.css"


export const Main = () => {
  return (
    <Flex className="wrapper">
      <motion.div
        className="main"
        initial={{ opacity: 0, y: 50 }} // Boshlang'ich holat
        animate={{ opacity: 1, y: 0 }} // Animatsiya holati
        transition={{ duration: 0.8 }} // Animatsiyaning davomiyligi
      >
        <Flex justify="space-around">
          <motion.div
            className="main_left"
            initial={{ opacity: 0, y: 50 }} // Pastdan boshlash
            animate={{ opacity: 1, y: 0 }} // Yuqoriga chiqish
            transition={{ duration: 0.8 }}
          >
            <h2 className="main_title">Biz haqqımızda</h2>
            <p className="main_desc">
              Biz - jasalma intellekt texnologiyaları járdeminde ósimlikler haqqında anıq hám paydalı maǵlıwmat usınıs etiwshi innovciyalıq platformamız.
              Biziń maqsetimiz - tábiyattı súyiwshi hám oǵan ǵamxorlıq etiwshi insanlarǵa ósimliklerdiń keselliklerin anıqlawda hám mashqalalardı tez anıqlawda járdem beriw.
            </p>
          </motion.div>

          <motion.div
            className="main_right"
            initial={{ opacity: 0, y: 50 }} // Pastdan boshlash
            animate={{ opacity: 1, y: 0 }} // Yuqoriga chiqish
            transition={{ duration: 1, delay: 0.4 }} // Keyinroq animatsiya
          >
            <img className="main_image" src={Image} alt="" />
          </motion.div>
        </Flex>
      </motion.div>
    </Flex>
  )
}

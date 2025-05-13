import { Flex } from "@mantine/core"
import Image from "../../assets/Rectangle 4.png"
import "./Main.css"


export const Main = () => {
  return (
    <Flex className="wrapper">
      <Flex justify="space-around" className="main">
        <Flex className="main_left" direction="column" gap={20}>
          <h2 className="main_title">
              Biz haqqımızda
          </h2>
          <p className="main_desc">
          Biz - jasalma intellekt texnologiyaları járdeminde ósimlikler haqqında anıq hám paydalı maǵlıwmat usınıs etiwshi innovciyalıq platformamız. Biziń maqsetimiz - tábiyattı súyiwshi hám oǵan ǵamxorlıq etiwshi insanlarǵa ósimliklerdiń keselliklerin anıqlawda hám mashqalalardı tez anıqlawda járdem beriw.
          </p>
        </Flex>
        <Flex className="main_right">
          <img className="main_image" src={Image} alt="" />
        </Flex>
      </Flex>
    </Flex>
  )
}

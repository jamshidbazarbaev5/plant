import { Flex } from "@mantine/core"
import "./OurService.css"
import Card2 from "../../assets/Rectangle 6 (2).jpg"
import Card3 from "../../assets/Rectangle 6.jpg"
import Card1 from "../../assets/Rectangle 6 (1).jpg"
import { motion } from "framer-motion" // motion import qilish

export const OurService = () => {
  return (
    <Flex className="wrapper">
      <motion.div
        className="service"
        initial={{ opacity: 0, y: 50 }} // Boshlang'ich holat (pastdan)
        animate={{ opacity: 1, y: 0 }} // Animatsiyali holat (yuqoriga)
        transition={{ duration: 1 }} // Animatsiya davomiyligi
      >
        <Flex direction="column" justify="center" align="center">
          <h3 className="service_title">Xızmetler</h3>
          <p className="service_desc">
            Súwretti júkleysiz - biz bolsa ósimlik túrin avtomatikalıq anıqlaymız.
          </p>
          <motion.div
            className="service_cards"
            initial={{ opacity: 0, y: 50 }} // Boshlang'ich holat
            animate={{ opacity: 1, y: 0 }} // Animatsiya holati
            transition={{ duration: 1, delay: 0.4 }} // Keyingi animatsiya uchun kechikish
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Flex className="service_card">
                <img className="service_card-img" src={Card1} alt="" />
                <div className="overlay"></div>
                <h3 className="service_card-title">Ósimlik haqqında tolıq maǵlıwmat</h3>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Flex className="service_card">
                <img className="service_card-img" src={Card2} alt="" />
                <div className="overlay"></div>
                <h3 className="service_card-title">Kesellik hám mashqalanı anıqlaw</h3>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Flex  className="service_card">
                <img className="service_card-img" src={Card3} alt="" />
                <div className="overlay"></div>
                <h3 className="service_card-title">Kútim boyınsha usınıslar</h3>
              </Flex>
            </motion.div>
          </motion.div>
        </Flex>
      </motion.div>
    </Flex>
  )
}

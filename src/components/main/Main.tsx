import { Flex } from "@mantine/core"
import Image from "../../assets/Rectangle 4.png"
import "./Main.css"


export const Main = () => {
  return (
    <Flex className="wrapper">
      <Flex justify="space-around" className="main">
        <Flex className="main_left" direction="column" gap={20}>
          <h2 className="main_title">
              Growing Your Vibrant Vegetables,
              in your Own Garden
          </h2>
          <p className="main_desc">
              Growing vegetables in your own garden can be a rewarding and fulfilling
              experience.Not only does it provide you with fresh and nutritious produce,
              but it also allows you to connect with nature and enjoy the satisfaction 
              of watching your plants thrive.
          </p>
        </Flex>
        <Flex className="main_right">
          <img className="main_image" src={Image} alt="" />
        </Flex>
      </Flex>
    </Flex>
  )
}

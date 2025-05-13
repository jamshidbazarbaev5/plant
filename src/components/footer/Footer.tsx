import { Flex, Input } from "@mantine/core"
import Logo from "../../assets/logo.svg"
import './Footer.css'

export const Footer = () => {
  return (
    <Flex className="wrapper">
        <div className="footer">
            <div className="footer_left">
                <img className="footer_image" src={Logo} alt="" />
                <div className="footer_info">
                    <h2 className="footer_contact">Kontakt</h2>
                    <p className="">Email: reypnazarovanazira@gmail.com</p>
                    <p className="">Tel: +998 97 241 17 07</p>
                </div>
            </div>
            <div className="footer_right">
                <h2 className="footer_feedback">Kommentariya</h2>
                <Flex direction='column' gap={5}>
                    <Input className="footer_input" type="text" placeholder="Atıńız"/>
                    <Input className="footer_input" type="text" placeholder="Kommentariya"/>
                </Flex>
                <button className="footer_btn">Jiberiw</button>
            </div>
        </div>
    </Flex>
  )
}


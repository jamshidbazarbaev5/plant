import { Flex, Image } from "@mantine/core"
import Logo from "../../assets/logo.svg"
import User from "../../assets/Profile.svg"
import Notification from "../../assets/Notification.svg"
import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <Flex className="wrapper" align="center" justify="space-between" h={80}>
        <Flex>
            <Image src={Logo} className="nav-logo"/>
        </Flex>
        <Flex gap={40} className="menu">
            <Link to="">Home</Link>
            <Link to="">Product</Link>
            <Link to="">Services</Link>
            <Link to="">Blog</Link>
        </Flex>
        <Flex gap={19} className="auth">
            <Image src={User} />
            <Image src={Notification} />
        </Flex>
    </Flex>
  )
}

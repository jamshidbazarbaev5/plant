import { Flex, Image } from "@mantine/core"
import Logo from "../../assets/logo.svg"
import User from "../../assets/Profile.svg"
import { HashLink } from "react-router-hash-link" 
import "./Navbar.css"
import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"


export const Navbar = () => {
  
  const { isAuth, refetch } = useAuth()

  useEffect(() => {
    if(!isAuth) {
      refetch()
    }
  }, [isAuth, refetch])

  return (
    <Flex className="wrapper" align="center" justify="space-between" h={80}>
        <Flex>
            <Image src={Logo} className="nav-logo"/>
        </Flex>
        <Flex gap={40} className="menu">
          <HashLink smooth to="/#hero">Bas bet</HashLink>
          <HashLink smooth to="/#about">Biz haqqımızda</HashLink>
          <HashLink smooth to="/#service">Xızmetler</HashLink>
          <HashLink smooth to="/#feedback">Kommentariyalar</HashLink>
        </Flex>
        <Flex gap={19} className="auth" >
            <Image src={User} />
        </Flex>
    </Flex>
  )
}

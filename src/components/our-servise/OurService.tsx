import { Flex } from "@mantine/core"
import "./OurService.css"
import Card2 from "../../assets/Rectangle 6 (2).jpg"
import Card3 from "../../assets/Rectangle 6.jpg"
import Card1 from "../../assets/Rectangle 6 (1).jpg"


export const OurService = () => {
  return (
    <Flex className="wrapper">
        <Flex direction="column" justify="center" align="center" className="service">
            <h3 className="service_title">Our Services</h3>
            <p className="service_desc">
                Discover a comprehensive range of services tailored to meet your needs.
                From strategic consultancy to hands-on implementation.
            </p>
            <Flex className="service_cards" m={42} gap={44}>
                <Flex className="service_card">
                    <img className="service_card-img" src={Card1} alt="" />
                    <div className="overlay"></div>
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
                <Flex className="service_card">
                    <img className="service_card-img" src={Card2} alt="" />
                    <div className="overlay"></div>
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
                <Flex className="service_card">
                    <img className="service_card-img" src={Card3} alt="" />
                    <div className="overlay"></div>
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}


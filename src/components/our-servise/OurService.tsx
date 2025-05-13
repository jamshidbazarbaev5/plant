import { Flex } from "@mantine/core"
import "./OurService.css"


export const OurService = () => {
  return (
    <Flex className="wrapper">
        <Flex direction="column" justify="center" align="center" className="service">
            <h3 className="service_title">Our Services</h3>
            <p className="service_desc">
                Discover a comprehensive range of services tailored to meet your needs.
                From strategic consultancy to hands-on implementation.
            </p>
            <Flex className="service_cards">
                <Flex className="service_card">
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
                <Flex className="service_card">
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
                <Flex className="service_card">
                    <h3 className="service_card-title">Farm Management Solutions</h3>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}


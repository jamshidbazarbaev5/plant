import { Flex } from "@mantine/core"
import "./Section.css"


export const Section = () => {
  return (
    <Flex className="section" direction='column'>
        <div className="section_overlay"></div>
        <div className="section_text">
            <h1 className="section_title">"A Guide to Home Gardening"</h1>
            <p className="section-desc">See Guidline</p>
        </div>
    </Flex>
  )
}



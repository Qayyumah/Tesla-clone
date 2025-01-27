import React from 'react'
import styled from 'styled-components'
import Section from './Section'


const Home = () => {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless dilivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless dilivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            description="Order Online for Touchless dilivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless dilivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
         />
         <Section
            title="Lower Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
         />
         <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
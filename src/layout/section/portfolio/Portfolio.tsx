import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {ImagesWrapper} from "./ImagesWrapper/ImagesWrapper";
/*import HowToMakeWebTemplates from "../../../assets/images/jpg/Good/portfolioImg/Blog-Portfolio-HowToMakeWebTemplates.webp"
import MakeBusinessCard from "../../../assets/images/jpg/Good/portfolioImg/Blog-MakeBusinessCard.webp"
import Design from "../../../assets/images/jpg/Good/portfolioImg/Blog-Design.webp"
import Pizza from "../../../assets/images/jpg/Good/portfolioImg/Pizza.webp"
import Mockup from "../../../assets/images/jpg/Good/portfolioImg/Mockup.webp"
import YourName from "../../../assets/images/jpg/Good/portfolioImg/Portfolio-YourName.webp"
import MockupPlace from "../../../assets/images/jpg/Good/portfolioImg/Mockup-place.webp"
import WeMakeBussiness from "../../../assets/images/jpg/Good/portfolioImg/we-make-bussiness.webp"
import CreateMedia from "../../../assets/images/jpg/Good/portfolioImg/Portfolio-CreateMedia.webp"*/

const portfolioItems = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container paddingPortfolio={"0"}>

                <SectionTitle textTitle={"Portfolio"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <Menu menuItems={portfolioItems}/>

                <ImagesWrapper/>

            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background-color: #fffabe;
    min-height: 100vh;
    //display: flex;
    //position: relative;
`



/*type StyledSectionImagesPropsType = {
    src: string
}*/

/*display: grid;
grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));

img {
    src:
}*/

import styled from "styled-components";
import React from 'react';
import HowToMakeWebTemplates
    from "../../../../assets/images/jpg/Good/portfolioImg/Blog-Portfolio-HowToMakeWebTemplates.webp";
import MakeBusinessCard from "../../../../assets/images/jpg/Good/portfolioImg/Blog-MakeBusinessCard.webp";
import Design from "../../../../assets/images/jpg/Good/portfolioImg/Blog-Design.webp";
import Pizza from "../../../../assets/images/jpg/Good/portfolioImg/Pizza.webp";
import Mockup from "../../../../assets/images/jpg/Good/portfolioImg/Mockup.webp";
import YourName from "../../../../assets/images/jpg/Good/portfolioImg/Portfolio-YourName.webp";
import MockupPlace from "../../../../assets/images/jpg/Good/portfolioImg/Mockup-place.webp";
import WeMakeBussiness from "../../../../assets/images/jpg/Good/portfolioImg/we-make-bussiness.webp";
import CreateMedia from "../../../../assets/images/jpg/Good/portfolioImg/Portfolio-CreateMedia.webp";

export const ImagesWrapper = () => {
    return (
        <StyledImagesWrapper>
            <img src={HowToMakeWebTemplates} alt=""/>
            <img src={MakeBusinessCard} alt=""/>
            <img src={Design} alt=""/>
            <img src={Pizza} alt=""/>
            <img src={Mockup} alt=""/>
            <img src={YourName} alt=""/>
            <img src={MockupPlace} alt=""/>
            <img src={WeMakeBussiness} alt=""/>
            <img src={CreateMedia} alt=""/>
        </StyledImagesWrapper>
    );
};

const StyledImagesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-auto-rows: 300px;
    gap: 20px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 16 / 9;
    }

`
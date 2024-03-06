
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
            <Photo src={HowToMakeWebTemplates} alt=""/>
            <Photo src={MakeBusinessCard} alt=""/>
            <Photo src={Design} alt=""/>
            <Photo src={Pizza} alt=""/>
            <Photo src={Mockup} alt=""/>
            <Photo src={YourName} alt=""/>
            <Photo src={MockupPlace} alt=""/>
            <Photo src={WeMakeBussiness} alt=""/>
            <Photo src={CreateMedia} alt=""/>
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
        
        //margin: 50px 0 70px;
    }
`

const Photo = styled.img`
    
`
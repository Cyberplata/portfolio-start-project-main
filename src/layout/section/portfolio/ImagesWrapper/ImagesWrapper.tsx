
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
import {Button} from "../../../../components/Button";
import {Portfolio} from "../Portfolio";

export const ImagesWrapper = () => {
    return (
        <StyledImagesWrapper>
            <ImageWrapper>
                <Photo src={HowToMakeWebTemplates} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={MakeBusinessCard} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={Design} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={Pizza} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={Mockup} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={YourName} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={MockupPlace} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={WeMakeBussiness} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
            <ImageWrapper>
                <Photo src={CreateMedia} alt=""/>
                <Button>view portfolio</Button>
            </ImageWrapper>
        </StyledImagesWrapper>
    );
};


const StyledImagesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-auto-rows: 300px;
    gap: 20px;
       
    
    /*img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        
        //margin: 50px 0 70px;
    }*/
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover { // Добавили blur картинкам при наведении
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            //background: rgba(0, 0, 0, 0.3);
            background: rgba(255, 180, 0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {  
            opacity: 1;  // Показываем кнопку
        }
    }

    ${Button} {
        opacity: 0;  // Изначально кнопка скрыта
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {  // Псевдоэлемент (линия-прямоугольник) будет всегда 100% 
            width: 100%;
            height: 100%;
        }
    }
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
`
import React from 'react';
import styled from "styled-components";
import {About} from "./about/About";
import {Languages} from "./languages/Languages";
import {Skills} from "./skills/Skills";
import {ExtraSkills} from "./extraskills/ExtraSkills";
import {Link} from "../../../../components/link/Link";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Profile} from "./profile/Profile";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {MobileLeftMain} from "./MobileLeftMain";


export const LeftMain = () => {
    return (
        <StyledLeftMain>
                {/*<MobileLeftMain/>*/}
                {/*<BurgerButton>
                    <span></span>
                </BurgerButton>*/}

                <FlexWrapper direction={"column"} justify={"space-between"} gap={"50px"}>
                    <Profile/>
                    <About/>
                    <Languages/>
                    <Skills/>
                    <ExtraSkills/>

                    <Link width={"220px"} height={"40px"}>
                        Download cv
                        <Icon iconId={"vector-arrow-down"}
                              width={"14px"}
                              height={"16px"}
                              viewBox={"0 0 14 16"}/>
                    </Link>

                </FlexWrapper>
        </StyledLeftMain>
    );
};

const StyledLeftMain = styled.aside`
    background-color: #FFFFFF;

    max-width: 305px;
    width: 100%;
    padding: 50px 45px 25px 40px;
    min-height: 100vh;

    position: relative;
    top: 0;
    left: 0;
    z-index: 999999;

    // Support
    //display: none; - при адаптиве
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    
    &:hover {
        scrollbar-width: inherit;
        
        /* Стили для скролла */
        &::-webkit-scrollbar {
            width: 8px; /* Ширина скроллбара */
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.accent}; /* Цвет скроллбара */
            border-radius: 4px; /* Радиус скроллбара */
        }

        &::-webkit-scrollbar-button:start:decrement {
            background-color: ${theme.colors.fontDiscription}; /* Цвет стрелки вверх */
        }

        &::-webkit-scrollbar-button:end:increment {
            background-color: ${theme.colors.fontDiscription}; /* Цвет стрелки вниз */
        }
    }
    
    @media (max-width: 1155px) {
        //display: none;
        position: absolute;
        left: -100%;
        //max-width: 100vw;
    }
`

const BurgerButton = styled.button`
    position: fixed;
    top: -35px;
    left: -30px;

    width: 30px;
    height: 18px;
    
    background-color: ${theme.colors.primaryBg};
    
    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        
        
        &::before {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-10px);
        }
        
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(10px);
        }
    }
`

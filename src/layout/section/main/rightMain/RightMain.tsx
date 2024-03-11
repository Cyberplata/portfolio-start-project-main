import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {LogoSvg} from "../../../../components/logoSvg/LogoSvg";
import {theme} from "../../../../styles/Theme";
import polygon from "../../../../assets/images/svg/rightMenu-svg/Polygon.svg";


export const RightMain = () => {
    return (
        <StyledRightMain>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"} gap={"212px"}>

                <LogoSvg/>

                <RightMainList>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"home"}/>
                            <Tooltip>home</Tooltip>
                        </Link>
                    </RightMainItem>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"service"}/>
                            <Tooltip>services</Tooltip>
                        </Link>
                    </RightMainItem>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"сv"}/>
                            <Tooltip>сv</Tooltip>
                        </Link>
                    </RightMainItem>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"portfolio"}/>
                            <Tooltip>portfolio</Tooltip>
                        </Link>
                    </RightMainItem>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"blog"}/>
                            <Tooltip>blog</Tooltip>
                        </Link>
                    </RightMainItem>
                    <RightMainItem>
                        <Link color={"#FFFFFF"} backgroundColor={"none"}>
                            <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"contact"}/>
                            <Tooltip>contact</Tooltip>
                        </Link>
                    </RightMainItem>
                </RightMainList>
            </FlexWrapper>
        </StyledRightMain>
    );
};

const StyledRightMain = styled.aside`
    box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
    background-color: #FAFAFA;

    max-width: 108px;
    width: 100%;
    min-height: 100vh;
    padding: 50px 34px;

    position: relative;
    right: 0;
    top: 0;
    z-index: 999999;
`

const RightMainList = styled.ul`
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    gap: 40px;

    position: relative;
    
    
`

const RightMainItem = styled.li`
    position: relative;
    display: inline-block;
        

    //:not[iconId={"home"}]

    ${Link} {
        color: #F0F0F6;
        //fill: green;
        //color: red;
        //background-color: #fff;
            // color: ${theme.colors.accent};

        //position: relative;
    }

    ${Link}:hover {
        //fill: green;
        //stroke: red;
        color: ${theme.colors.accent};
        //fill: currentColor;
        //stroke: currentColor;
            // background-color: ${theme.colors.accent};

        /*position: relative;
        //content: attr(data-title);
        content: "Hello";
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: opacity 0.3s ease;*/
    }

        /*&::before { // Позиционируем наш треугольник
        background-image: url(${polygon});
        background-repeat: no-repeat;
        
        // content: ${polygon};
        // display: inline-block;
    }*/
`

const Tooltip = styled.div`  //Подсказка
    background-color: ${theme.colors.font};
    color: ${theme.colors.primaryBg};
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-transform: capitalize;
    //text-align: center;
    //vertical-align: center;

    border-radius: 2px;
    //width: 65px;
    //height: 24px;


    position: absolute;
    top: -40px; /* Расположение подсказки над иконкой */
    left: 50%; /* Положение по центру иконки */
    transform: translateX(-50%);
    padding: 5px 15px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    opacity: 0; /* Скрываем подсказку по умолчанию */
    transition: opacity 0.3s ease;

    &::before { // Позиционируем наш треугольник
        content: url(${polygon});
        //display: inline-block;
        //width: 80px;
        //height: 80px;
        //background: rgba(255, 255, 255, 0.1);
        //transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 36%;
        top: 90%;
        transform-origin: top left;  // Двигаем относительно центральной точки
        //z-index: 999999999;

        // background-image: url(${polygon});
        // background-repeat: no-repeat;
        // background-position: 50% 50%;
    }
    
    ${RightMainItem}:hover & {
        opacity: 1; /* Отображаем подсказку при наведении на иконку */
    }
`;

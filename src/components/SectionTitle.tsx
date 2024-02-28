import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "./FlexWrapper";

type SectionTitlePropsType = {
    textTitle: string
    textDiscription: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <div>
            <StyledSectionTitle>{props.textTitle}</StyledSectionTitle>
            <FlexWrapper justify={"center"} align={"center"}>
                <StyledSectionDiscription>{props.textDiscription}</StyledSectionDiscription>
            </FlexWrapper>
        </div>

    );
};


const StyledSectionTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 123.6%;
    //letter-spacing: 0%;
    text-align: center;
    text-transform: capitalize;
`

const StyledSectionDiscription = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    text-align: center;
    text-transform: capitalize;

    max-width: 438px;
    width: 100%;
    margin: 25px 0 50px;
`


/*
export const SectionTitle = styled.h2`
    //text-align: center;
    //margin-bottom: 50px;
    /!*letter-spacing: 5px;
    margin-bottom: 90px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;*!/
    
    //position: relative;
    
    //p {
    //    margin: 25px 0 50px;
    //}
    
    /!*&::after {
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum";
        
        display: inline-block;
        position: absolute;
        left: 25%;
        top: 50px;
        max-width: 438px;
        width: 100%;

        color: rgb(118, 118, 118);
        font-family: Inter, sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: center;
        text-transform: capitalize;
    }*!/
    
    /!*&::before { // сделали нашу линию после заголовка
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ;
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media  {
            bottom: -24px;
        }
    }*!/
`*/

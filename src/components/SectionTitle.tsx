import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";

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
    //line-height: 123.6%;
    //letter-spacing: 0%;
    text-align: center;
    text-transform: capitalize;
`

const StyledSectionDiscription = styled.h2`
    color: ${theme.colors.fontDiscription};
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


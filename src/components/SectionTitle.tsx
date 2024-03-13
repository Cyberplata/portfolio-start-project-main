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
        <BoxTitle>
            <StyledSectionTitle>{props.textTitle}</StyledSectionTitle>
            <FlexWrapper justify={"center"} align={"center"}>
                <StyledSectionDiscription>{props.textDiscription}</StyledSectionDiscription>
            </FlexWrapper>
        </BoxTitle>

    );
};

const BoxTitle = styled.div`
    // width: 100%;
    // background-color: ${theme.colors.secondaryBg};
    // overflow: hidden;
`

const StyledSectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
`

const StyledSectionDiscription = styled.p`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;

    max-width: 438px;
    width: 100%;
    margin: 25px 0 50px;
`


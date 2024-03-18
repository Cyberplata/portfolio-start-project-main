import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

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
    text-align: center;
`

const StyledSectionDiscription = styled.p`
    max-width: 438px;
    width: 100%;
    padding: 25px 0 50px;
`


import React from 'react';
import {LeftMain} from "./leftMain/LeftMain";
import {CenterMain} from "./centerMain/CenterMain";
import {RightMain} from "./rightMain/RightMain";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <LeftMain/>
                <CenterMain/>
                <RightMain/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    background-color: #fab9b9;
    min-height: 100vh;
`
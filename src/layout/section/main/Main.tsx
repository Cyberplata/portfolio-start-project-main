import React from 'react';
import {LeftMain} from "./leftMain/LeftMain";
import {CenterMain} from "./centerMain/CenterMain";
import {RightMain} from "./rightMain/RightMain";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <LeftMain/>
                    <CenterMain/>
                    <RightMain/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    background-color: #c7cffa;
    min-height: 100vh;
`
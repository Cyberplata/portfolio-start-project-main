import React from 'react';
import styled from "styled-components";
import {About} from "./about/About";
import {Languages} from "./languages/Languages";
import {Skills} from "./skills/Skills";
import {ExtraSkills} from "./extraskills/ExtraSkills";
import {ButtonCv} from "../../../../components/buttonCv/ButtonCv";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Profile} from "./profile/Profile";

export const LeftMain = () => {
    return (
        <StyledLeftMenu>
            <FlexWrapper direction={"column"} justify={"center"}>
                <Profile/>
                <About/>
                <Languages/>
                <Skills/>
                <ExtraSkills/>
                <ButtonCv/>
            </FlexWrapper>
        </StyledLeftMenu>

    );
};

const StyledLeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 335px;
    background-color: #d4ffd3;
    min-height: 100vh;
`







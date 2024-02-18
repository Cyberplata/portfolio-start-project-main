import React from 'react';
import styled from "styled-components";
import {About} from "./about/About";
import {Languages} from "./languages/Languages";
import {Skills} from "./skills/Skills";
import {ExtraSkills} from "./extraskills/ExtraSkills";
import {Link} from "../../../../components/Link/Link";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Profile} from "./profile/Profile";

export const LeftMain = () => {
    return (
        <StyledLeftMenu>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <Profile/>
                <About/>
                <Languages/>
                <Skills/>
                <ExtraSkills/>
                <Link name="Download cv" iconId={"vector-arrow-down"}/>
            </FlexWrapper>
        </StyledLeftMenu>

    );
};

const StyledLeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 305px;
    background-color: #d4ffd3;
    min-height: 100vh;
`







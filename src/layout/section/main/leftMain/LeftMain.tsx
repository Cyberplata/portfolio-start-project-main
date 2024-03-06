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
import {Container} from "../../../../components/Container";
// import {Container} from "../../../../components/Container";

export const LeftMain = () => {
    return (
        <StyledLeftMenu>
                <FlexWrapper direction={"column"} justify={"space-between"} gap={"25px"}>
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
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.aside`
    border: 1px solid mediumvioletred;

    //display: flex;
    //flex-direction: column;
    max-width: 305px;
    width: 100%;
    background-color: #eeffed;
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
`

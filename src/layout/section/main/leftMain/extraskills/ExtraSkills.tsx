import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

export const ExtraSkills = () => {
    return (
        <StyledExtraSkills>
            <FlexWrapper direction={"column"}>
                <ExtraSkillsTitle>Extra Skills</ExtraSkillsTitle>
                <ExtraSkillsSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} iconId={"extraSkill"}/>
                    </a>
                    <span>Bootstrap, Materialize</span>
                </ExtraSkillsSection>
                <ExtraSkillsSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} iconId={"extraSkill"}/>
                    </a>
                    <span>Stylus, Sass, Less</span>
                </ExtraSkillsSection>
                <ExtraSkillsSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} iconId={"extraSkill"}/>
                    </a>
                    <span>Gulp, Webpack, Grunt</span>
                </ExtraSkillsSection>
                <ExtraSkillsSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} iconId={"extraSkill"}/>
                    </a>
                    <span>GIT Knowledge</span>
                </ExtraSkillsSection>
            </FlexWrapper>
        </StyledExtraSkills>
    );
};

const StyledExtraSkills = styled.div`
    outline: 1px solid #0e0d0d;
`

const ExtraSkillsTitle = styled.h3`

`

const ExtraSkillsSection = styled.section`
    display: flex;
    justify-content: space-between;
`
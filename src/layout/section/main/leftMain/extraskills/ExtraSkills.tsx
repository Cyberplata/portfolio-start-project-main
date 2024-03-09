import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {theme} from "../../../../../styles/Theme";
import {Link} from "../../../../../components/link/Link";

export const ExtraSkills = () => {
    return (
        <StyledExtraSkills>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <ExtraSkillsTitle>Extra Skills</ExtraSkillsTitle>
                <ExtraSkillsContent>
                    <Icon height={"15px"} width={"15px"} viewBox={"0 0 15 15"} iconId={"extraSkill"}/>
                    <SkillsName>Bootstrap, Materialize</SkillsName>
                </ExtraSkillsContent>
                <ExtraSkillsContent>
                    <Icon height={"15px"} width={"15px"} viewBox={"0 0 15 15"} iconId={"extraSkill"}/>
                    <SkillsName>Stylus, Sass, Less</SkillsName>
                </ExtraSkillsContent>
                <ExtraSkillsContent>
                    <Icon height={"15px"} width={"15px"} viewBox={"0 0 15 15"} iconId={"extraSkill"}/>
                    <SkillsName>Gulp, Webpack, Grunt</SkillsName>
                </ExtraSkillsContent>
                <ExtraSkillsContent>
                    <Icon height={"15px"} width={"15px"} viewBox={"0 0 15 15"} iconId={"extraSkill"}/>
                    <SkillsName>GIT Knowledge</SkillsName>
                </ExtraSkillsContent>
            </FlexWrapper>

            <Line></Line>
        </StyledExtraSkills>
    );
};

const Line = styled.div``

const StyledExtraSkills = styled.div`
    outline: 1px solid #0e0d0d;

    ${Line} {
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 0;
            border: 1.5px solid ${theme.colors.secondaryBg};

            position: absolute;
            bottom: -24px;
            z-index: -1;
        }
    }
`

const ExtraSkillsTitle = styled.h3`
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    
    padding-bottom: 10px;
`

const ExtraSkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
`

const SkillsName = styled.span`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    
    padding-left: 15px;
`
import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {theme} from "../../../../../styles/Theme";
import {Link} from "../../../../../components/link/Link";
import {Line} from "../../../../../components/Line";

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

            <Line/>
        </StyledExtraSkills>
    );
};


const StyledExtraSkills = styled.div`
    outline: 1px solid #0e0d0d;
    
`

const ExtraSkillsTitle = styled.h3`    
    padding-bottom: 10px;
`

const ExtraSkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
`

const SkillsName = styled.span`    
    padding-left: 15px;
`
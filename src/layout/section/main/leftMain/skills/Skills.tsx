import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <FlexWrapper direction={"column"}>
                <SkillsSection>
                    <span>Html</span>
                    <span>90%</span>
                </SkillsSection>
                <SkillsSection>
                    <span>CSS</span>
                    <span>85%</span>
                </SkillsSection>
                <SkillsSection>
                    <span>PHP</span>
                    <span>75%</span>
                </SkillsSection>
                <SkillsSection>
                    <span>PHP</span>
                    <span>75%</span>
                </SkillsSection>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    outline: 1px solid #0e0d0d;
`

const SkillsTitle = styled.h3`

`

const SkillsSection = styled.section`
    display: flex;
    justify-content: space-between;
`
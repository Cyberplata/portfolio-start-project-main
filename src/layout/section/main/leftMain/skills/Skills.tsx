import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <FlexWrapper direction={"column"}>
                <SkillsContent>
                    <span>Html</span>
                    <span>90%</span>
                </SkillsContent>
                <SkillsContent>
                    <span>CSS</span>
                    <span>85%</span>
                </SkillsContent>
                <SkillsContent>
                    <span>PHP</span>
                    <span>75%</span>
                </SkillsContent>
                <SkillsContent>
                    <span>PHP</span>
                    <span>75%</span>
                </SkillsContent>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    outline: 1px solid #0e0d0d;
`

const SkillsTitle = styled.h3`

`

const SkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
`
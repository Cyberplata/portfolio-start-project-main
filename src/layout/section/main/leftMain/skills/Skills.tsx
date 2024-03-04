import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Progress} from "../progressBar/Progress";
import {ProgressLine} from "../progressBar/progressLine/ProgressLine";

export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <FlexWrapper direction={"column"}>

                {/*<SkillsContent>*/}
                {/*    <span>Html</span>*/}
                {/*    <span>90%</span>*/}
                {/*</SkillsContent>*/}
                {/*<SkillsContent>*/}
                {/*    <span>CSS</span>*/}
                {/*    <span>85%</span>*/}
                {/*</SkillsContent>*/}
                {/*<SkillsContent>*/}
                {/*    <span>PHP</span>*/}
                {/*    <span>75%</span>*/}
                {/*</SkillsContent>*/}
                {/*<SkillsContent>*/}
                {/*    <span>PHP</span>*/}
                {/*    <span>75%</span>*/}
                {/*</SkillsContent>*/}


                <Progress name={"Html"} percent={"90%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"209px"} height={"4px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"4px"}></ProgressLine>
                </ProgressContainer>

                <Progress name={"CSS"} percent={"85%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"207px"} height={"4px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"4px"}></ProgressLine>
                </ProgressContainer>

                <Progress name={"Js"} percent={"80%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"201px"} height={"4px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"4px"}></ProgressLine>
                </ProgressContainer>

                <Progress name={"PHP"} percent={"75%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"187px"} height={"4px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"4px"}></ProgressLine>
                </ProgressContainer>


                <Progress name={"WordPress"} percent={"85%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"207px"} height={"4px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"4px"}></ProgressLine>
                </ProgressContainer>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    border: 1px solid #0e0d0d;
`

const SkillsTitle = styled.h3`

`

const ProgressContainer = styled.div`
    
`

// const SkillsContent = styled.div`
//     display: flex;
//     justify-content: space-between;
// `
import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Progress} from "../progressBar/Progress";
import {ProgressLine} from "../progressBar/progressLine/ProgressLine";
import {theme} from "../../../../../styles/Theme";
import {Line} from "../../../../../components/Line";

export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <FlexWrapper direction={"column"}>


                <Box>
                    <Progress name={"Html"} percent={"90%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"209px"}></ProgressLine>
                        <ProgressLine width={"10px"}></ProgressLine>
                    </ProgressContainer>
                </Box>


                <Box>
                    <Progress name={"CSS"} percent={"85%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"207px"}></ProgressLine>
                        <ProgressLine width={"12px"}></ProgressLine>
                    </ProgressContainer>
                </Box>


                <Box>
                    <Progress name={"Js"} percent={"80%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"201px"}></ProgressLine>
                        <ProgressLine width={"18px"}></ProgressLine>
                    </ProgressContainer>
                </Box>


                <Box>
                    <Progress name={"PHP"} percent={"75%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"187px"}></ProgressLine>
                        <ProgressLine width={"32px"}></ProgressLine>
                    </ProgressContainer>
                </Box>


                <Box>
                    <Progress name={"WordPress"} percent={"85%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"207px"}></ProgressLine>
                        <ProgressLine width={"12px"}></ProgressLine>
                    </ProgressContainer>
                </Box>
            </FlexWrapper>

            <Line/>
        </StyledSkills>
    );
};


const StyledSkills = styled.div`
    outline: 1px solid #0e0d0d;
`

const SkillsTitle = styled.h3`
    padding-bottom: 5px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 10px;
`

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid ${theme.colors.accent};
    border-radius: 30px;
    height: 4px;
    //gap: 20px;
`
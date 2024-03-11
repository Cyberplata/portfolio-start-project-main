import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme";
import {Progress} from "../progressBar/Progress";
import {ProgressLine} from "../progressBar/progressLine/ProgressLine";
import {Line} from "../../../../../components/Line";

export const Languages = () => {
    return (
        <StyledLanguages>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <LanguagesTitle>Languages</LanguagesTitle>

                <Box>
                    <Progress name={"Bangla"} percent={"100%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"218px"} ></ProgressLine>
                    </ProgressContainer>
                </Box>
                
                <Box>
                    <Progress name={"English"} percent={"80%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"208px"} ></ProgressLine>
                        <ProgressLine width={"10px"} ></ProgressLine>
                    </ProgressContainer>
                </Box>

                <Box>
                    <Progress name={"Spanish"} percent={"60%"}/>
                    <ProgressContainer>
                        <ProgressLine backgroundColor={"#FFB400"} width={"190px"} ></ProgressLine>
                        <ProgressLine width={"28px"} ></ProgressLine>
                    </ProgressContainer>
                </Box>
            </FlexWrapper>

            <Line/>
        </StyledLanguages>
    );
};


const StyledLanguages = styled.div`
    outline: 1px solid #0e0d0d;
`

const LanguagesTitle = styled.h3`
    
    padding-bottom: 5px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 10px;
    //border-radius: 30px;
`

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid ${theme.colors.accent};
    border-radius: 30px;
    height: 4px;
    gap: 15px;
    //width: 100%;
`

// const LanguagesContent = styled.div`
//     display: flex;
//     justify-content: space-between;
// `
//
// const ProggressLine = styled.div`
//     //color: yellow;
//     border-radius: 30px;
//     background-color: ${theme.colors.accent};
//     height: 2px;
//     width: 100%;
// `


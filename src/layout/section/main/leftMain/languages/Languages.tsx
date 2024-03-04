import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme";
import {Progress} from "../progressBar/Progress";
import {ProgressLine} from "../progressBar/progressLine/ProgressLine";

export const Languages = () => {
    return (
        <StyledLanguages>
            <LanguagesTitle>Languages</LanguagesTitle>
            <FlexWrapper direction={"column"} justify={"space-between"} gap={"10px"}>

                
                <Progress name={"Bangla"} percent={"100%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"100%"} height={"2px"}></ProgressLine>
                </ProgressContainer>

                <Progress name={"English"} percent={"80%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"208px"} height={"2px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"2px"}></ProgressLine>
                </ProgressContainer>

                <Progress name={"Spanish"} percent={"60%"}/>
                <ProgressContainer>
                    <ProgressLine backgroundColor={"#FFB400"} width={"190px"} height={"2px"}></ProgressLine>
                    <ProgressLine width={"100%"} height={"2px"}></ProgressLine>
                </ProgressContainer>

                {/*<LanguagesContent>*/}
                {/*    <div>Bangla</div>*/}
                {/*    <div>100%</div>*/}
                {/*</LanguagesContent>*/}
                {/*<ProgressBar>*/}
                {/*    <ProggressLine></ProggressLine>*/}
                {/*</ProgressBar>*/}
                {/*<LanguagesContent>*/}
                {/*    <span>English</span>*/}
                {/*    <span>80%</span>*/}
                {/*</LanguagesContent>*/}
                {/*<LanguagesContent>*/}
                {/*    <span>Spanish</span>*/}
                {/*    <span>60%</span>*/}
                {/*</LanguagesContent>*/}
            </FlexWrapper>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.div`
    border: 1px solid #0e0d0d;
`

const LanguagesTitle = styled.h3`

`

const ProgressContainer = styled.div`
    
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


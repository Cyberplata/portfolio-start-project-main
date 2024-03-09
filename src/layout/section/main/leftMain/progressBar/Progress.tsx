import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme";
import {ProgressLine} from "./progressLine/ProgressLine";


type ProgressPropsType = {
    name: string
    percent: string
}

export const Progress = (props: ProgressPropsType) => {
    return (
        <StyledProgress>
            <FlexWrapper justify={"space-between"}>
                {/*<LanguagesContainer></LanguagesContainer>*/}
                <ProgressName>{props.name}</ProgressName>
                <ProgressPercent>{props.percent}</ProgressPercent>
                {/*<ProgressLine backgroundColor={"#FFB400"} width={"100%"} height={"2px"}></ProgressLine>
                <ProgressLine backgroundColor={"#FFB400"} width={"100%"} height={"2px"}></ProgressLine>*/}
                {/*</LanguagesContainer>*/}

                {/*<ProgressContainer>*/}
                {/*    <ProgressLine ></ProgressLine>*/}
                {/*    <ProgressLine></ProgressLine>*/}
                {/*</ProgressContainer>*/}
            </FlexWrapper>
        </StyledProgress>
    );
};

const StyledProgress = styled.div`
    //display: flex;
    //justify-content: space-between;
    //gap: 10px;
    
`

const ProgressPercent = styled.div`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
`

const ProgressName = styled.div`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
`

// const ProgressContainer = styled.div`
//      display: flex;
//      justify-content: space-between;
//      border: 0.5px solid ${theme.colors.accent};
//      border-radius: 30px;
//      height: 4px;
// `



// const LanguagesContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     gap: 20px;
// `

// type ProgressLinePropsType = {
//     backgroundColor?: string
//     width?: string
//     height?: string
// }
//
// export const ProgressLine = styled.div<ProgressLinePropsType>`
//     border-radius: 30px;
//     background-color: ${props => props.backgroundColor || theme.colors.primaryBg};
//     height: ${props => props.height || "2px"};
//     width: ${props => props.width || "100%"};
// `




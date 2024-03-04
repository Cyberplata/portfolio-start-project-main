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
                {/*    <LanguagesContainer>*/}
                <div>{props.name}</div>
                <div>{props.percent}</div>
                {/*<ProgressLine backgroundColor={"#FFB400"} width={"100%"} height={"2px"}></ProgressLine>
                <ProgressLine backgroundColor={"#FFB400"} width={"100%"} height={"2px"}></ProgressLine>*/}
                {/*</LanguagesContainer>*/}
            </FlexWrapper>
        </StyledProgress>
    );
};

const StyledProgress = styled.div`
    //border: 1px solid red;
`



/*const LanguagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    //gap: 20px;
`*/

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




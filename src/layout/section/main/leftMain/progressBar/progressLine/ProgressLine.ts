import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";

type ProgressLinePropsType = {
    backgroundColor?: string
    width?: string
    height?: string
}

export const ProgressLine = styled.div<ProgressLinePropsType>`
    border-radius: 30px;
    background-color: ${props => props.backgroundColor || theme.colors.primaryBg};
    height: ${props => props.height || "2px"};
    width: ${props => props.width || "100%"};
`
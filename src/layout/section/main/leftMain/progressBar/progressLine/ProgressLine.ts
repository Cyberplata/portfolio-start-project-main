import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";

type ProgressLinePropsType = {
    backgroundColor?: string
    width?: string
    height?: string
    gap?: string
}

export const ProgressLine = styled.div<ProgressLinePropsType>`
    background-color: ${props => props.backgroundColor || theme.colors.primaryBg};
    height: ${props => props.height || "2px"};
    width: ${props => props.width};
    gap: ${props => props.gap};
    border-radius: 30px;
`
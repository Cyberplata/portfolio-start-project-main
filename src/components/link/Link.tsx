import styled from "styled-components";
import {theme} from "../../styles/Theme";


type LinkPropsType = {
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string
    color?: string
    boxShadow?: string
    display?: string
    justify?: string
    align?: string
    gap?: string
    fill?: string

    // fontSize?: string
    // fontWeight?: string
    // lineHeight?: string
    // textTransform?: string
    // fontFamily?: string
}

// export const LinkText = styled.span``

export const Link = styled.a<LinkPropsType>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor || "rgb(255, 180, 0)"};
    color: ${props => props.color || "none"};
    box-shadow: ${props => props.boxShadow || "none"};
    cursor: pointer;
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    gap: ${props => props.gap || "20px"};
    fill: ${props => props.fill};
`


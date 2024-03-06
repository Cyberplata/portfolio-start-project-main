import styled from "styled-components";


type LinkPropsType = {
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string
    color?: string
    boxShadow?: string
    // displayFlex?: string
    justify?: string
    align?: string
    gap?: string
    fill?: string
}

export const Link = styled.a<LinkPropsType>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor || "rgb(255, 180, 0)"};
    color: ${props => props.color || "none"};
    box-shadow: ${props => props.boxShadow || "none"};
    cursor: pointer;
    display: flex;
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    gap: ${props => props.gap || "20px"};
    fill: ${props => props.fill};
`
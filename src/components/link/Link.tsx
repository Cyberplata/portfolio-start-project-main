import styled from "styled-components";


type LinkPropsType = {
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string
    dispFlex?: string
    justify?: string
    align?: string
    gap?: string
}

export const Link = styled.a<LinkPropsType>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor || "rgb(255, 180, 0)"};
    cursor: pointer;
    display: flex;
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    gap: ${props => props.gap || "20px"};
`
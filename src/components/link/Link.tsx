// import React from 'react';
// import {Icon} from "../icon/Icon";
import styled from "styled-components";

// type LinkPropsType = {
//     name?: string
//     iconId?: any
//     widthLink?: string
//     heightLink?: string
// }
//
// export const link = (props: LinkPropsType) => {
//     return (
//         <StyledLink href="#">
//             {props.name}
//             <Icon iconId={props.iconId}/>
//         </StyledLink>
//     );
// };
//
// const StyledLink = styled.a<LinkPropsType>`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgb(255, 180, 0);
//     width: ${props => props.widthLink};
//     height: ${props => props.heightLink};
// `

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
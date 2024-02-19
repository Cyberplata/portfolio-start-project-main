import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type LinkPropsType = {
    name?: string
    iconId?: any
    widthLink?: string
    heightLink?: string
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href="#">
            {props.name}
            <Icon iconId={props.iconId}/>
        </StyledLink>
    );
};

const StyledLink = styled.a<LinkPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 180, 0);
    width: ${props => props.widthLink};
    height: ${props => props.heightLink};
`
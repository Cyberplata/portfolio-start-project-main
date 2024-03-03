import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map( (item, index)=> {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                } )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    outline: 1px solid #0e0d0d;
    
    ul {
        display: flex;
        gap: 36px;
        justify-content: center;
    }
`
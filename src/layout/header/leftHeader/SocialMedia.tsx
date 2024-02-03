import React from 'react';
import styled from "styled-components";

export const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            <ul>
                <li>
                    <a href="">facebook</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">instagram</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">twitter</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">linkedin</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">youtube</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">dribbble</a>
                </li>
            </ul>
        </StyledSocialMedia>
    );
};

const StyledSocialMedia = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
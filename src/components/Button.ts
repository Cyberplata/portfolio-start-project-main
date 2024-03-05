import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    width: 160px;
    height: 36px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.font};
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
`
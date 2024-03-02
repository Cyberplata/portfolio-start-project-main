import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const PricePlanTotal = styled.p`
    margin: 20px 0 8px;

    color: ${theme.colors.font};
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 123.6%;
    letter-spacing: 0%;
    text-align: center;
    text-transform: capitalize;
    
    
    position: relative;
    
    &::after {
        content: "/hour";

        display: inline-block;
        position: absolute;
        left: 105%;
        bottom: -2px;

        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        text-transform: capitalize;
    }
`
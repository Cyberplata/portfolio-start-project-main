import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const PricePlanTotal = styled.p`
    padding: 20px 0 8px;

    color: ${theme.colors.font};
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
    
    
    position: relative;
    
    &::after {
        content: "/hour";

        display: inline-block;
        position: absolute;
        left: 105%;
        bottom: 6px;

        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        text-transform: capitalize;
    }
`
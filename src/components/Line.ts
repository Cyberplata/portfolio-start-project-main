import {theme} from "../styles/Theme";
import styled from "styled-components";

export const Line = styled.div`
    position: relative;
    //z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 0;
        border: 1.5px solid ${theme.colors.secondaryBg};

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        transform: translateY(24px);
        //z-index: -1;
    }
`
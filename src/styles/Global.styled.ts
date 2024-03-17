import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {Link} from "../components/link/Link";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
            // background-color: ${theme.colors.secondaryBg};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;

        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
    }

    //aside {
    //    background-color: #fff;
    //}

    header {
        background-color: ${theme.colors.primaryBg};
    }


    section {
        margin: 70px 0;
    }
    
    // section:not(:first-child) {
    //     padding: 70px 0;
    //     // background-color: ${theme.colors.secondaryBg};
    // }

    // section:nth-child(3n-1) {
    //     padding: 70px 0;
    //     background-color: ${theme.colors.secondaryBg};
    // }

    //section {
    //    padding: 70px 0;
    //}

    //section:first-child {
    //    padding-top: 130px;
    //    background-color: #f30707;
    //}

    footer {
        background-color: ${theme.colors.primaryBg};
    }

    .App {
        display: flex;
        max-height: 100vh;
        overflow: hidden;
        background-color: ${theme.colors.secondaryBg};
        //background-color: #e9f8ea;
    }

    #root {
        height: 100%;
    }
    
    h1 {
        font-family: "Inter", sans-serif;
        font-size: 48px;
        font-weight: 700;
        line-height: 123.6%;
        text-align: left;
    }
    
    h2 {
        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 123.6%;
        text-align: left;
        text-transform: capitalize;
    }

    h3 {
        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }

    span,
    p {
        color: ${theme.colors.fontDiscription};
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        text-transform: capitalize;
        text-align: center;

        &.active {
            color: ${theme.colors.font};
        }
    }

    ${Link} {
        color: ${theme.colors.font};
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
    }
`
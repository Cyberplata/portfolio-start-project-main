import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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

    h3 {
        color: ${theme.colors.font};
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
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
    }

    //aside {
    //    background-color: #fff;
    //}

    header {
        background-color: ${theme.colors.primaryBg};
    }


    section:not(:first-child) {
        padding: 70px 0;
        background-color: ${theme.colors.secondaryBg};
    }

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
`
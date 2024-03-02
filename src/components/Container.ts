import styled from "styled-components";

type ContainerPropsType = {
    /*maxWidth?: string*/
    paddingPortfolio?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1026px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.paddingPortfolio || "0 28px"};
    margin: 0 auto;
    border: 1px solid red;
`
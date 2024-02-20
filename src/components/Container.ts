import styled from "styled-components";

type ContainerPropsType = {
    maxWidth?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth};
    width: 100%;
    min-height: 100%;
    padding: 0 32px;
    margin: 0 auto;
    outline: 1px solid red;
`
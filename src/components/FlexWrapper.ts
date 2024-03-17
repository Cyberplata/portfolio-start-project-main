import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    marginLeft?: string
    width?: string
    grow?: number
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap};
    margin-left: ${props => props.marginLeft};
    width: ${props => props.width};
    flex-grow: ${props => props.grow};
    //height: 100%;  // добавляем 100% от родителя (весь экран сделали). Так как нас не устраивает, что высота было по контент + все элементы по вертикали выровнились по центру
`
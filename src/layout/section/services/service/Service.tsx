import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type ServicePropsType = {
    iconId: string
    title: string
    description: string
    // width?: string
    // height?: string
    // viewBox?: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}/>
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.description}</ServiceText>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    border: 1px solid #0e0d0d;
    
    background-color: ${theme.colors.primaryBg};
    width: 310px;
    padding: 62px 20px 40px;
    flex-grow: 1;
    //position: relative;

`

/*export const IconWrapper = styled.div`
    position: relative;

    /!*&::before { // Позиционируем наш ромбик
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left; // Двигаем относительно центральной точки
    }*!/
`*/

const ServiceTitle = styled.h3`
    margin: 26px 0 15px;
    text-transform: capitalize;
`

const ServiceText = styled.p`
    text-align: center;
`
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

const ServiceTitle = styled.h3`
    margin: 26px 0 15px;
    text-transform: capitalize;
`

const ServiceText = styled.p`
    text-align: center;
`
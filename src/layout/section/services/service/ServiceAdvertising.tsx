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

export const ServiceAdvertising = (props: ServicePropsType) => {
    return (
        <StyledServiceAdvertising>
            <FlexWrapper direction={"column"} align={"center"}>
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.description}</ServiceText>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>
        </StyledServiceAdvertising>
    );
};

const StyledServiceAdvertising = styled.div`
    background-color: ${theme.colors.primaryBg};
    width: 310px;
    padding: 62px 20px 40px;
    flex-grow: 1;
    //position: relative;
`

const ServiceTitle = styled.h3`
    text-transform: capitalize;
`

const ServiceText = styled.p`
    margin: 22px 0 26px;
    text-align: center;
`
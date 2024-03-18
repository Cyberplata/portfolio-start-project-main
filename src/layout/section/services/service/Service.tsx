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
    outline: 1px solid #0e0d0d;
    
    background-color: ${theme.colors.primaryBg};
    //max-width: 300px;
    width: 310px;
    padding: 34px 32px;
    flex-grow: 1;
    
    /*@media (max-width: 1511px) {
        max-width: 290px;
        width: 100%;
        flex-grow: 1;
    }*/

    @media ${theme.media.mobile} {
        padding: 34px 0 32px;
    }
`

const ServiceTitle = styled.h3`
    padding: 26px 0 15px;
`

const ServiceText = styled.p`
    
`
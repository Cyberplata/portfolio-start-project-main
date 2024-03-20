import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";

type ServicePropsType = {
    iconId?: string
    title?: string
    description?: string
    iconCheck?: boolean
    linkCheck?: boolean
    // width?: string
    // height?: string
    // viewBox?: string
}

export const Service = (props: ServicePropsType) => {
    if (props.iconCheck) {
        return (
            <StyledService >
                <FlexWrapper direction={"column"} align={"center"}>
                    <Icon iconId={props.iconId}/>
                    <ServiceTitle>{props.title}</ServiceTitle>
                    <ServiceText>{props.description}</ServiceText>
                </FlexWrapper>
            </StyledService>
        );
    }
    else {
        return (
            <StyledService>
                <FlexWrapper direction={"column"} align={"center"}>
                    <ServiceTitle>{props.title}</ServiceTitle>
                    <ServiceText>{props.description}</ServiceText>
                    <Link backgroundColor={"unset"} gap={"0"}>
                        ORDER NOW
                        <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
                    </Link>
                </FlexWrapper>
            </StyledService>
        );
    }

    /*return (
        <StyledService>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}/>
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.description}</ServiceText>
            </FlexWrapper>
        </StyledService>
    );*/
};

const StyledService = styled.div<ServicePropsType>`
    ${props => props.iconCheck && css<ServicePropsType>`
        outline: 1px solid #0e0d0d;

        background-color: ${theme.colors.primaryBg};
        //max-width: 300px;
        width: 310px;
        padding: 34px 32px;
        flex-grow: 1;
    `}
    
    ${props => props.linkCheck && css<ServicePropsType>`
        outline: 1px solid #0e0d0d;

        background-color: ${theme.colors.accent};
        //max-width: 300px;
        width: 310px;
        //height: 100%;
        //padding: 62px 20px 40px;
        padding: 30px 25px;
        flex-grow: 1;

        ${Link} {
            color: ${theme.colors.accent};
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
        }
    `}
    
    /*@media (max-width: 1511px) {
            max-width: 290px;
            width: 100%;
            flex-grow: 1;
    }*/

    @media ${theme.media.mobile} {
        padding: 34px 0 32px;
    }
`

const ServiceTitle = styled.h3<ServicePropsType>`
    ${props => props.iconCheck && css<ServicePropsType>`
        padding: 26px 0 15px;
    `}
    
    ${props => props.linkCheck && css<ServicePropsType>`
        padding: 0;
    `}

`

const ServiceText = styled.p<ServicePropsType>`
    ${props => props.iconCheck && css<ServicePropsType>`
        padding: 0;
    `}

    ${props => props.linkCheck && css<ServicePropsType>`
        padding: 24px 0;
    `}
`
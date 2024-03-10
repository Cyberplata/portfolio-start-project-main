import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Link, LinkText} from "../../../../components/link/Link";

type ServicePropsType = {
    iconId?: string
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

                <Link backgroundColor={"unset"} color={"#FFB400"} gap={"0"} fontFamily={"Roboto"} fontSize={"12px"} fontWeight={"700"} lineHeight={"14px"}>
                    <LinkText>ORDER NOW</LinkText>
                    <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
                </Link>

            </FlexWrapper>
        </StyledServiceAdvertising>
    );
};

const StyledServiceAdvertising = styled.div`
    outline: 1px solid #0e0d0d;

    background-color: ${theme.colors.primaryBg};
    width: 310px;
    padding: 62px 20px 40px;
    flex-grow: 1;
    //position: relative;

    ${Link}:hover {
        border-radius: 30px;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
        padding: 5px;
    }
`

const ServiceTitle = styled.h3`
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`

const ServiceText = styled.p`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    text-align: center;

    margin: 22px 0 26px;
`
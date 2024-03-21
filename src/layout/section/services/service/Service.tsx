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
}

export const Service = (props: ServicePropsType) => {
    if (props.iconCheck) {
        return (
            <StyledService className={"firstEl"}>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Icon iconId={props.iconId}/>
                    <ServiceTitle className={"firstElTitle"}>{props.title}</ServiceTitle>
                    <ServiceText>{props.description}</ServiceText>
                </FlexWrapper>
            </StyledService>
        );
    } else {
        return (
            <StyledService className={"lastEl"}>
                <FlexWrapper direction={"column"} align={"center"}>
                    <ServiceTitle>{props.title}</ServiceTitle>
                    <ServiceText className={"lastElText"}>{props.description}</ServiceText>
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

const StyledService = styled.div`
    &.firstEl {
        outline: 1px solid #0e0d0d;

        background-color: ${theme.colors.primaryBg};
        //max-width: 300px;
        width: 300px;
        padding: 34px 32px;
        flex-grow: 1;
    }

    &.lastEl {
        outline: 1px solid #0e0d0d;

        background-color: ${theme.colors.primaryBg};
        //max-width: 300px;
        width: 300px;
        //height: 100%;
        //padding: 62px 20px 40px;
        padding: 30px 25px 28px;
        flex-grow: 1;

        ${Link} {
            color: ${theme.colors.accent};
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
        }
    }
    

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
    &.firstElTitle {
        padding: 26px 0 15px;
    }
    
`

const ServiceText = styled.p`

    &.lastElText {
        padding: 24px 0;
    }
    
`
import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";

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

                <Link backgroundColor={"unset"} gap={"0"}>
                    ORDER NOW
                    <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
                </Link>

            </FlexWrapper>
        </StyledServiceAdvertising>
    );
};

const StyledServiceAdvertising = styled.div`
    outline: 1px solid #0e0d0d;

    background-color: ${theme.colors.primaryBg};
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

    /*@media (max-width: 1511px) {
        max-width: 290px;
        width: 100%;
        flex-grow: 1;
    }*/
`

const ServiceTitle = styled.h3`
    
`

const ServiceText = styled.p`
    padding: 24px 0;
`
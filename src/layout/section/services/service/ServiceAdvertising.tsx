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

                <Link width={"86px"} height={"20px"} backgroundColor={"none"} color={"#FFB400"}>
                    ORDER NOW
                    <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
                </Link>

                {/*<Icon iconId={props.iconId}/>*/}
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
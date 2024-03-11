import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {ServiceSilver} from "./service/ServiceSilver";
import {PricePlanTotal} from "../pricePlanTotal/PricePlanTotal";

/*type SilverPropsType = {
    title?: string
    total?: string
    text?: string
}*/

export const Silver = () => {
    return (
        <StyledPricePlanSilver>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <PricePlanTitle>silver</PricePlanTitle>
                <PricePlanTotal>$0.00</PricePlanTotal>
                <PricePlanTotalText>For most businesses that want to
                    optimize web queries</PricePlanTotalText>

                <ServiceSilver/>

                <Link width={"170px"}
                      height={"38px"}
                      borderRadius={"30px"}
                      backgroundColor={"rgb(255, 255, 255)"}
                      boxShadow={"0px 1px 10px 0px rgba(0, 0, 0, 0.15)"}>
                    ORDER NOW
                </Link>
            </FlexWrapper>
        </StyledPricePlanSilver>
    );
};

const StyledPricePlanSilver = styled.div`
    outline: 1px solid black;
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    width: 100%;
    padding: 54px 30px 25px;
    
    ${Link} {
        color: ${theme.colors.font};
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        text-transform: capitalize;
    }
    
    ${Link}:hover {
        background-color: ${theme.colors.accent};
    }
`

const PricePlanTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`

const PricePlanTotalText = styled.p`
    
`

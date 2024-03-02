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

                <Link width={"170px"} height={"38px"} borderRadius={"30px"} backgroundColor={"rgb(255, 255, 255)"} boxShadow={"0px 1px 10px 0px rgba(0, 0, 0, 0.15)"}>ORDER NOW</Link>
            </FlexWrapper>
        </StyledPricePlanSilver>
    );
};

const StyledPricePlanSilver = styled.div`
    border: 1px solid black;
    background-color: ${theme.colors.primaryBg};
    //max-width: 310px;
    width: 100%;
    //margin: 100px 20px 70px;
`

const PricePlanTitle = styled.h3`

`

/*const PricePlanTotal = styled.p`
    margin: 20px 0 8px;
    
    position: relative;
    
    &::after {
        content: "/hour";

        display: inline-block;
        position: absolute;
        left: 50px;

        color: rgb(43, 43, 43);
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        text-transform: capitalize;
    }
`*/

const PricePlanTotalText = styled.p`
    
`

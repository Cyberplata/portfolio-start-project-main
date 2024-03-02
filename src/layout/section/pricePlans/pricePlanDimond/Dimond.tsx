import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {ServiceDimond} from "./service/ServiceDimond";
import {PricePlanTotal} from "../pricePlanTotal/PricePlanTotal";

/*type SilverPropsType = {
    title?: string
    total?: string
    text?: string
}*/

export const Dimond = () => {
    return (
        <StyledPricePlanSilver>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <PricePlanTitle>dimond</PricePlanTitle>
                <PricePlanTotal>$80.00</PricePlanTotal>
                <PricePlanTotalText>For most businesses that want to
                    optimize web queries</PricePlanTotalText>

                <ServiceDimond/>

                <Link width={"170px"} height={"38px"} borderRadius={"30px"} backgroundColor={"rgb(255, 255, 255)"} boxShadow={"0px 1px 10px 0px rgba(0, 0, 0, 0.15)"}>ORDER NOW</Link>
            </FlexWrapper>
        </StyledPricePlanSilver>
    );
};

const StyledPricePlanSilver = styled.div`
    border: 1px solid black;
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    width: 100%;
    //margin: 100px 20px 70px;
`

const PricePlanTitle = styled.h3`

`

/*const PricePlanTotal = styled.p`
    margin: 20px 0 8px;
`*/

const PricePlanTotalText = styled.p`
    
`

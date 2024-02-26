import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {ServiceGold} from "./service/ServiceGold";

// type PricePlanGoldPropsType = {
//     title?: string
//     total?: string
//     text?: string
// }

export const Gold = () => {
    return (
        <StyledPricePlanGold>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <PricePlanTitle>gold</PricePlanTitle>
                <PricePlanTotal>$50.00</PricePlanTotal>
                <PricePlanTotalText>For most businesses that want to
                    optimize web queries</PricePlanTotalText>

                <ServiceGold/>

                <Link width={"170px"} height={"38px"} borderRadius={"30px"}>ORDER NOW</Link>
            </FlexWrapper>
        </StyledPricePlanGold>
    );
};

const StyledPricePlanGold = styled.div`
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    width: 100%;
    margin: 100px 20px 70px;
`

const PricePlanTitle = styled.h3`

`

const PricePlanTotal = styled.p`
    margin: 20px 0 8px;
`

const PricePlanTotalText = styled.p`
    
`

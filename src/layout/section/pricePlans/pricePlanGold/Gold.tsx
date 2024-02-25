import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {PricePlanServiceGold} from "./service/PricePlanServiceGold";

type PricePlanGoldPropsType = {
    title?: string
    total?: string
    text?: string
}

export const Gold = (props: PricePlanGoldPropsType) => {
    return (
        <StyledPricePlanGold>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <PricePlanTitle>{props.title}</PricePlanTitle>
                <PricePlanTotal>{props.total}</PricePlanTotal>
                <PricePlanTotalText>{props.text}</PricePlanTotalText>

                <PricePlanServiceGold/>

                <Link width={"170"} height={"38px"} borderRadius={"30px"}>ORDER NOW</Link>
            </FlexWrapper>
        </StyledPricePlanGold>
    );
};

const StyledPricePlanGold = styled.div`
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    //width: 100%;
    padding: 100px 20px 40px;
`

const PricePlanTitle = styled.h3`

`

const PricePlanTotal = styled.p`
    
`

const PricePlanTotalText = styled.p`
    
`

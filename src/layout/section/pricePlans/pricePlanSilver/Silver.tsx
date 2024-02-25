import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {PricePlanServiceSilver} from "./service/PricePlanServiceSilver";

type PricePlanPropsType = {
    title?: string
    total?: string
    text?: string
}

export const Silver = (props: PricePlanPropsType) => {
    return (
        <StyledPricePlanSilver>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <PricePlanTitle>{props.title}</PricePlanTitle>
                <PricePlanTotal>{props.total}</PricePlanTotal>
                <PricePlanTotalText>{props.text}</PricePlanTotalText>

                <PricePlanServiceSilver/>
                {/*<PricePlanService/>
                <PricePlanService/>*/}

                <Link width={"170"} height={"38px"} borderRadius={"30px"}>ORDER NOW</Link>
            </FlexWrapper>
        </StyledPricePlanSilver>
    );
};

const StyledPricePlanSilver = styled.div`
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

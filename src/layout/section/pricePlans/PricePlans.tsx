import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Silver} from "./pricePlanSilver/Silver";
import {Gold} from "./pricePlanGold/Gold";
import {Dimond} from "./pricePlanDimond/Dimond";



export const PricePlans = () => {
    return (
        <StyledPricePlans>
            <Container>
                <SectionTitle>Price plans</SectionTitle>
                <FlexWrapper justify={"space-between"}>
                    <Silver/>
                    <Gold/>
                    <Dimond/>
                </FlexWrapper>
            </Container>

        </StyledPricePlans>
    );
};

const StyledPricePlans = styled.section`
    display: flex;
    //max-width: 248px;
    width: 100%;
    min-height: 100vh;
`
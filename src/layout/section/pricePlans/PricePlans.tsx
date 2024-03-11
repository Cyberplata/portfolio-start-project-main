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

                <SectionTitle textTitle={"Price plans"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
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
`

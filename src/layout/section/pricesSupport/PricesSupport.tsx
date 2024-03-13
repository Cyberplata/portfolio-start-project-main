import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {PricePlansSupport} from "./pricePlansSupport/PricePlansSupport";
import {silverItems} from "./arrayServiceItems/silverItems";
import {goldItems} from "./arrayServiceItems/goldItems";
import {dimondItems} from "./arrayServiceItems/dimondItems";



export const PricesSupport = () => {
    return (
        <StyledPricePlansSupport>
            <Container>

                <SectionTitle textTitle={"Prices Support"}
                              textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}
                />

                <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"20px"}>
                    <PricePlansSupport title={"silver"}
                                       price={"$0.00"}
                                       text={"For most businesses that want to optimize web queries"}
                                       arrayServiceItems={silverItems}
                    />
                    <PricePlansSupport title={"gold"}
                                       price={"$50.00"}
                                       text={"For most businesses that want to optimize web queries"}
                                       arrayServiceItems={goldItems}
                    />
                    <PricePlansSupport title={"dimond"}
                                       price={"$80.00"}
                                       text={"For most businesses that want to optimize web queries"}
                                       arrayServiceItems={dimondItems}
                    />

                </FlexWrapper>
            </Container>

        </StyledPricePlansSupport>
    );
};

const StyledPricePlansSupport = styled.section`
    display: flex;
`
import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

type PricePlanServiceSilverPropsType = {
    iconId?: string
}

export const PricePlanServiceSilver = (props: PricePlanServiceSilverPropsType) => {
    return (
        <StyledPricePlanServiceSilver>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    </a>
                    <span>UI Design</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    </a>
                    <span>web development</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>logo design</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>seo optimization</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>wordPress integration</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>5 Websites</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>unlimited user</span>
                </PricePlanServiceSection>
                <PricePlanServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>20 gB bandwith</span>
                </PricePlanServiceSection>

            </FlexWrapper>
        </StyledPricePlanServiceSilver>
    );
};

const StyledPricePlanServiceSilver = styled.div`
    outline: 1px solid #0e0d0d;
`

const PricePlanServiceSection = styled.div`
    display: flex;
    justify-content: space-between;
`
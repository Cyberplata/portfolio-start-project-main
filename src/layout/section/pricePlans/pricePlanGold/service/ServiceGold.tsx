import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

// type PricePlanServiceGoldPropsType = {
//     iconId?: string
// }

export const ServiceGold = () => {
    return (
        <StyledServiceGold>
            <FlexWrapper direction={"column"} gap={"16px"}>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    <ServiceName className={"active"}>UI Design</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    <ServiceName className={"active"}>web development</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    <ServiceName className={"active"}>logo design</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    <ServiceName className={"active"}>seo optimization</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName>wordPress integration</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName>5 Websites</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName>unlimited user</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName>20 gB bandwith</ServiceName>
                </ServiceSection>
            </FlexWrapper>
        </StyledServiceGold>
    );
};

const StyledServiceGold = styled.div`
    outline: 1px solid #0e0d0d;
    margin: 20px 0 32px;
    width: 100%;
`

const ServiceSection = styled.div`
    display: flex;
    gap: 14px;
`

const ServiceName = styled.span``
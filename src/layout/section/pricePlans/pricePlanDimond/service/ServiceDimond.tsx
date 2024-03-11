import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";


export const ServiceDimond = () => {
    return (
        <StyledServiceDimond>
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
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>logo design</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>seo optimization</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>wordPress integration</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>5 Websites</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>unlimited user</ServiceName>
                </ServiceSection>
                <ServiceSection>
                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    <ServiceName className={"active"}>20 gB bandwith</ServiceName>
                </ServiceSection>
            </FlexWrapper>
        </StyledServiceDimond>
    );
};

const StyledServiceDimond = styled.div`
    outline: 1px solid #0e0d0d;
    margin: 20px 0 32px;
    width: 100%;
`

const ServiceSection = styled.div`
    display: flex;
    gap: 14px;
`

const ServiceName = styled.span``
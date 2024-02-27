import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

// type ServiceSilverPropsType = {
//     iconId?: string
// }

export const ServiceSilver = () => {
    return (
        <StyledServiceSilver>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    </a>
                    <span>UI Design</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"check"}/>
                    </a>
                    <span>web development</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>logo design</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>seo optimization</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>wordPress integration</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>5 Websites</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>unlimited user</span>
                </ServiceSection>
                <ServiceSection>
                    <a href="#">
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"cross"}/>
                    </a>
                    <span>20 gB bandwith</span>
                </ServiceSection>

            </FlexWrapper>
        </StyledServiceSilver>
    );
};

const StyledServiceSilver = styled.div`
    outline: 1px solid #0e0d0d;
    margin: 20px 0 20px;
    //display: flex;
    //justify-content: start;
    //align-items: flex-start;
`

const ServiceSection = styled.div`
    display: flex;
    justify-content: space-between;
`
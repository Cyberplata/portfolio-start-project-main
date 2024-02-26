import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Service} from "./service/Service";
import {SectionTitle} from "../../../components/SectionTitle";
import {ServiceAdvertising} from "./service/ServiceAdvertising";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>my services</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Service iconId={"my-services-coding"}
                             title={"web development"}
                             description={"blog, e-commerce"}/>
                    <Service iconId={"illustration"}
                             title={"uI/uX design"}
                             description={"Mobile app, website design"}/>
                    <Service iconId={"microphone"}
                             title={"sound design"}
                             description={"Voice Over, Beat Making"}/>
                    <Service iconId={"game-dev"}
                             title={"game design"}
                             description={"Character Design, Props & Objects"}/>
                    <Service iconId={"photographer"}
                             title={"photography"}
                             description={"portrait, product photography"}/>
                    {/*<Service title={"advertising"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}
                             iconId={"right-arrow"}/>*/}
                    <ServiceAdvertising title={"advertising"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}/>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    display: flex;

    position: relative;
    z-index: 99999;
`
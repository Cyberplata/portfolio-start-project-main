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

                <SectionTitle textTitle={"my services"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}>
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

                    <ServiceAdvertising title={"advertising"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}/>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    margin: 138px 0;

    display: flex;
    //position: relative;
`

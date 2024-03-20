import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Service} from "./service/Service";
import {SectionTitle} from "../../../components/SectionTitle";
import {ServiceAdvertising} from "./service/ServiceAdvertising";
import {theme} from "../../../styles/Theme";

export const Services = () => {
    return (
        <StyledServices>
            <Container paddingPortfolio={"0 28px"}>

                <SectionTitle textTitle={"my services"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}>
                    <Service iconCheck
                             iconId={"my-services-coding"}
                             title={"web development"}
                             description={"blog, e-commerce"}/>
                    <Service iconCheck
                             iconId={"illustration"}
                             title={"uI/uX design"}
                             description={"Mobile app, website design"}/>
                    <Service iconCheck
                             iconId={"microphone"}
                             title={"sound design"}
                             description={"Voice Over, Beat Making"}/>
                    <Service iconCheck
                             iconId={"game-dev"}
                             title={"game design"}
                             description={"Character Design, Props & Objects"}/>
                    <Service iconCheck
                             iconId={"photographer"}
                             title={"photography"}
                             description={"portrait, product photography"}/>

                    <Service linkCheck
                             title={"advertising"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}
                             />

                    {/*<ServiceAdvertising title={"advertising"}*/}
                    {/*         description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}/>*/}
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    margin: 138px 0;

    display: flex;
`

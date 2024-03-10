import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";

export const Recommendations = () => {
    return (
        <StyledRecommendations>

            <SectionTitle textTitle={"recommendations"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

            <Container>
                <Slider/>
            </Container>
        </StyledRecommendations>

    );
};

const StyledRecommendations = styled.section`
    
`
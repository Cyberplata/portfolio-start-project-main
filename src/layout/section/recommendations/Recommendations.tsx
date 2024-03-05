import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            {/*<SectionTitle>recommendations</SectionTitle>*/}
            {/*<FlexWrapper justify={"center"}>*/}
            {/*    <RecommendationsDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.*/}
            {/*        Velit officia consequat duis enim velit mollit. lorem ipsum</RecommendationsDescription>*/}
            {/*</FlexWrapper>*/}

            <SectionTitle textTitle={"recommendations"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

            <Container>
                <Slider/>
            </Container>
        </StyledRecommendations>

    );
};

const StyledRecommendations = styled.section`
    background-color: #e7f8bc;
    //min-height: 100vh;
`

/*
const RecommendationsDescription = styled.p`
    max-width: 438px;
    width: 100%;
    margin: 25px 0 50px;
    text-align: center;
    //display: flex;
    //justify-content: center;
    //align-items: center;
`*/

import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <AboutContent>
                    <span>Age:</span>
                    <span>24</span>
                </AboutContent>
                <AboutContent>
                    <span>Residence:</span>
                    <span>BD</span>
                </AboutContent>
                <AboutContent>
                    <span>Freelance:</span>
                    <span>Available</span>
                </AboutContent>
                <AboutContent>
                    <span>Address:</span>
                    <span>Dhaka,Bangladesh</span>
                </AboutContent>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    border: 1px solid #0e0d0d;
`

const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
`
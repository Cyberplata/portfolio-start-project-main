import React from 'react';
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <AboutSection>
                <span>Age:</span>
                <span>24</span>
            </AboutSection>
            <AboutSection>
                <span>Residence:</span>
                <span>BD</span>
            </AboutSection>
            <AboutSection>
                <span>Freelance:</span>
                <span>Available</span>
            </AboutSection>
            <AboutSection>
                <span>Address:</span>
                <span>Dhaka,Bangladesh</span>
            </AboutSection>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    outline: 1px solid #0e0d0d;
`

const AboutSection = styled.section`
    display: flex;
    justify-content: space-between;
`
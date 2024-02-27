import React from 'react';
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
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
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    outline: 1px solid #0e0d0d;
`

const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
`
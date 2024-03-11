import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme";
import {Line} from "../../../../../components/Line";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper direction={"column"} justify={"space-between"} gap={"10px"}>
                <AboutContent>
                    <LeftColumn width={"46px"} height={"24px"}>Age:</LeftColumn>
                    <RightColumn>24</RightColumn>
                </AboutContent>
                <AboutContent>
                    <LeftColumn width={"89px"} height={"24px"}>Residence:</LeftColumn>
                    <RightColumn>BD</RightColumn>
                </AboutContent>
                <AboutContent>
                    <LeftColumn width={"85px"} height={"24px"}>Freelance:</LeftColumn>
                    <RightColumn><span>Available</span></RightColumn>
                </AboutContent>
                <AboutContent>
                    <LeftColumn width={"75px"} height={"24px"}>Address:</LeftColumn>
                    <RightColumn>Dhaka,Bangladesh</RightColumn>
                </AboutContent>
            </FlexWrapper>
            <Line/>
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

type LeftColumnPropsType = {
    width?: string
    height?: string
}

const LeftColumn = styled.span<LeftColumnPropsType>`
    color: ${theme.colors.font};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
    
    padding-left: 5px;
    //overflow: hidden;
    
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        display: inline-block;
        width: ${props => props.width};
        height: ${props => props.height};
        background-color: ${theme.colors.accent};
        
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        //overflow: hidden;
    }
`

const RightColumn = styled.span`
    color: ${theme.colors.font};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
    
    span {
        color: #7EB942;
    }
`
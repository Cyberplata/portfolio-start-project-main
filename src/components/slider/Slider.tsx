import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {Slide} from "./slide/Slide";
import jamesImg from "../../assets/images/jpg/Good/recommendations/Recommendations-James.webp"
import tianaImg from "../../assets/images/jpg/Good/recommendations/Recommendations-Tiana.webp"
import talanImg from "../../assets/images/jpg/Good/recommendations/Recommendations-Talan.webp"
import {theme} from "../../styles/Theme";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify={"space-between"} align={"center"} gap={"10px"} wrap={"wrap"}>
                <Slide title={"Great Quality!"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                       src={jamesImg} name={"James Gouse"} position={"Graphic Designer"}/>
                <Slide title={"Amazing work!"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                       src={tianaImg} name={"Tiana Philips"} position={"Photographer"}/>
                <Slide title={"Great Quality!"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                       src={talanImg} name={"Talan Westervelt"} position={"Business man"}/>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    background-color: #fff;
    outline: 1px solid #0b0bfd;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: center;

`

const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding-top: 50px;
    
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        margin: 10px;
        background-color: ${theme.colors.accent};
    }
`
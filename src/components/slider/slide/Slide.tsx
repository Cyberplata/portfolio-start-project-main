import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {Icon} from "../../icon/Icon";
import {theme} from "../../../styles/Theme";

type ReviewPropsType = {
    // iconId: string
    title: string
    description: string
    src: string
    name: string
    position: string
}

export const Slide = (props: ReviewPropsType) => {
    return (
        <StyledReview>
            <FlexWrapper gap={"10px"}>
                <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
                <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
            </FlexWrapper>

            <ReviewTitle>{props.title}</ReviewTitle>
            <ReviewText>{props.description}</ReviewText>

            <FlexWrapper align={"center"} gap={"25px"}>
                <Image src={props.src} alt=""/>
                <div>
                    <Name>{props.name}</Name>
                    <Position>{props.position}</Position>
                </div>
            </FlexWrapper>
        </StyledReview>
    );
};

const StyledReview = styled.div`
    background-color: ${theme.colors.primaryBg};
    outline: 1px solid #070707;
    max-width: 310px;
    width: 100%;
    padding: 25px 20px;

`

const ReviewTitle = styled.h3`
    padding: 16px 0 18px;

    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`

const ReviewText = styled.p`
    padding: 18px 0 30px;

    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    text-align: left;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
`

const Name = styled.h3`
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    
    padding-bottom: 5px;
`

const Position = styled.p`
    color: ${theme.colors.fontDiscription};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
`


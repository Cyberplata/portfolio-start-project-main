import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {Icon} from "../../icon/Icon";

type ReviewPropsType = {
    // iconId: string
    title: string
    description: string
    src: string
    name: string
    position: string
}

export const Review = (props: ReviewPropsType) => {
    return (
        <StyledReview>
            <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
            <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
            <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
            <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>
            <Icon iconId={"star"} width={"18"} height={"18px"} viewBox={"0 0 18 18"}/>

            <ReviewTitle>{props.title}</ReviewTitle>
            <ReviewText>{props.description}</ReviewText>

            <FlexWrapper justify={"space-evenly"}>
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
    border: 1px solid black;
    max-width: 310px;
    width: 100%;
    padding: 25px;
`

const ReviewTitle = styled.h3`

`

const ReviewText = styled.p`

`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`

const Name = styled.h3`

`

const Position = styled.p`

`


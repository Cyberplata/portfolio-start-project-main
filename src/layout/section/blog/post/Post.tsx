import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";
import {Icon} from "../../../../components/icon/Icon";

type PostPropsType = {
    title: string
    text: string
    src: string
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>
            <Image src={props.src} alt=""/>
            <PostTitle>{props.title}</PostTitle>
            <PostText>{props.text}</PostText>

            <Link backgroundColor={"unset"} color={"rgb(255, 180, 0)"} gap={"0"} justify={"flex-start"}>
                Learn more
                <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
            </Link>
        </StyledPost>
    );
};

const StyledPost = styled.div`
    border: 1px solid black;
    max-width: 310px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

const PostTitle = styled.h3`
    text-transform: capitalize;
`

const PostText = styled.p``
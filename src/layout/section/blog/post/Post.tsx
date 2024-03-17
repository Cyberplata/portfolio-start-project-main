import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type PostPropsType = {
    title: string
    text: string
    src: string
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>
            <Image src={props.src} alt=""/>
            <Box>
                <PostTitle>{props.title}</PostTitle>
                <PostText>{props.text}</PostText>

                <Link backgroundColor={"unset"} gap={"0"} justify={"flex-start"}>
                    <span>Learn more</span>
                    <Icon width={"20px"} height={"20px"} viewBox={"0 0 20 20"} iconId={"right-arrow"}/>
                </Link>
            </Box>
        </StyledPost>
    );
};

const StyledPost = styled.div`
    background-color: ${theme.colors.primaryBg};
    outline: 1px solid black;
    max-width: 310px;
    width: 100%;
    
    ${Link} {
        //width: 99px;
        //height: 22px;
        // color: ${theme.colors.accent};
        // font-size: 18px;
        // font-weight: 500;
        // text-align: left;
        // text-transform: capitalize;
        
        span {
            color: ${theme.colors.accent};
            font-size: 18px;
            font-weight: 500;
            text-align: left;
            text-transform: capitalize;
        }
        
        span:hover {
            border-bottom: 1px solid ${theme.colors.accent};
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

const Box = styled.div`
    padding: 25px;
`

const PostTitle = styled.h3`
    text-transform: capitalize;
`

const PostText = styled.p`
    text-align: left;
    padding: 8px 0;
`
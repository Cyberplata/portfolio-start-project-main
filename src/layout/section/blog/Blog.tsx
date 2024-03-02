import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Post} from "./post/Post";

export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <SectionTitle textTitle={"Blog"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <FlexWrapper justify={"space-between"}>
                    <Post/>
                    <Post/>
                    <Post/>
                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #aff8b2;
    min-height: 100vh;
`
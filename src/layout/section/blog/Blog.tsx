import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Post} from "./post/Post";
import HowToMakeWebTemplates from "../../../assets/images/jpg/Good/portfolioImg/Blog-Portfolio-HowToMakeWebTemplates.webp";
import MakeBusinessCard from "../../../assets/images/jpg/Good/portfolioImg/Blog-MakeBusinessCard.webp";
import Design from "../../../assets/images/jpg/Good/portfolioImg/Blog-Design.webp";


export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <SectionTitle textTitle={"Blog"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Post src={HowToMakeWebTemplates}
                          title={"How to make web tempates"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>

                    <Post src={MakeBusinessCard}
                          title={"make Business card"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>

                    <Post src={Design}
                          title={"How to make Flyer Design"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}/>
                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #aff8b2;
    //min-height: 100vh;
`
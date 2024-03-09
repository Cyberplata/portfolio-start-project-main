import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Link, LinkText} from "../../components/link/Link";
import photo from "../../assets/images/jpg/Good/ProfileMain.webp"
import {Container} from "../../components/Container";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import ellipse15 from "../../assets/images/svg/centerMenu/bg/Ellipse15.svg";
import ellipse12 from "../../assets/images/svg/centerMenu/bg/Ellipse12.svg";
import rectangle51 from "../../assets/images/svg/centerMenu/bg/Rectangle51.svg";
import ellipse16 from "../../assets/images/svg/centerMenu/bg/Ellipse16.svg";
import rectangle52 from "../../assets/images/svg/centerMenu/bg/Rectangle52.svg";
import ellipse13 from "../../assets/images/svg/centerMenu/bg/Ellipse13.svg";
import polygon1 from "../../assets/images/svg/centerMenu/bg/Polygon1.svg";


export const Header = () => {
    return (
        <StyledHeader>

            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <StyledHeaderTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</StyledHeaderTitle>
                        <StyledHeaderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
                            feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
                            lectus.</StyledHeaderText>

                        <Link width={"154px"} height={"50px"}>
                            <LinkText>HIRE ME</LinkText>
                            <Icon width={"16px"} height={"16px"} viewBox={"0 0 16 16"} iconId={"arrow-right-black"}/>
                        </Link>
                    </div>
                    <StyledPhoto src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    outline: 1px solid #0606f5;
    background-color: #ffe4b4;
    display: flex;

    //position: relative;
    
     ${Container} {
        background-image: url(${ellipse15}), 
                          url(${ellipse12}), 
                          url(${rectangle51}), 
                          url(${ellipse16}), 
                          url(${rectangle52}),
                          url(${ellipse13}),
                          url(${polygon1});
        background-repeat: no-repeat;
        background-position: 40px 30px, 
                             520px 52px, 
                             923px 70px,
                             88px 422px,
                             374px 374px,
                             558px 380px,
                             949px 427px;
    }    
`

const StyledHeaderTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    
    span {
        color: ${theme.colors.accent};
    }
`

const StyledHeaderText = styled.p`
    color: ${theme.colors.fontDiscription};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    
    padding: 18px 0 25px;
`

const StyledPhoto = styled.img`
    max-width: 325px;
    max-height: 460px;
    width: auto;
    height: auto;
    object-fit: cover;
    display: flex;
`

// const StyledLinkText = styled.span`
//     color: ${theme.colors.font};
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 19px;
// `

//Support - для FlexWrapper задать display: grid; grid-template-columns: 1fr 1fr Также для адаптива сделать imgWrapper


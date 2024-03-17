import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Link} from "../../components/link/Link";
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
import {font} from "../../styles/Common";


export const Header = () => {
    return (
        <StyledHeader>

            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <Box>
                        <StyledHeaderTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</StyledHeaderTitle>

                        <StyledHeaderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
                            feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
                            lectus.</StyledHeaderText>


                        <Link width={"154px"} height={"50px"} gap={"10px"}>
                            HIRE ME
                            <Icon width={"16px"} height={"16px"} viewBox={"0 0 16 16"} iconId={"arrow-right-black"}/>
                        </Link>
                    </Box>

                    <PhotoWrapper>
                        <StyledPhoto src={photo}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const Box = styled.div`
    @media ${theme.media.mobile} {
        padding: 0 32px;
    }
`

const StyledHeader = styled.header`
    margin: 0 auto;
    max-width: 1030px;
    //width: 100%;
        
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
    
    ${FlexWrapper} {
        @media (max-width: 1366px) {
            justify-content: center;
        }
    }
    
    ${Link} {
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        
        @media ${theme.media.tablet} {
            margin-bottom: 50px;
        }
    }
`

const StyledHeaderTitle = styled.h1`
    max-width: 500px;
    width: 100%;
    
    span {
        ${font({
            family: "'Inter', sans-serif", 
            weight: 700, 
            color: "#FFB400", 
            Fmax: 48, 
            Fmin: 48,
        })}

        // font-family: "Inter", sans-serif;
        // font-size: 48px;
        // font-weight: 700;
        // line-height: 123.6%;
        // text-align: left;
        // color: ${theme.colors.accent};
        
    }

    @media ${theme.media.tablet} {
        margin-top: 100px;
    }
`

const StyledHeaderText = styled.p`
    max-width: 424px;
    width: 100%;
    
    font-size: 16px;
    text-align: left;
    
    margin: 18px 0 25px;
    
    @media ${theme.media.mobile} {
        margin: 30px 0 34px;
    }
`

const PhotoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        padding: 0 10px;
    }
`

const StyledPhoto = styled.img`
    //max-width: 325px;
    //max-height: 460px;
    //width: auto;
    //height: auto;
    width: 325px;
    height: 460px;
    object-fit: cover;
    display: flex;
    //flex-wrap: wrap;

    @media ${theme.media.tablet} {
        width: 325px;
        height: 457px;
    }
    
`

//Support - для FlexWrapper задать display: grid; grid-template-columns: 1fr 1fr Также для адаптива сделать imgWrapper


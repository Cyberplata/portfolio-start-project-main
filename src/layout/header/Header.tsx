import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Link} from "../../components/link/Link";
import photo from "../../assets/images/jpg/Good/ProfileMain.webp"
import {Container} from "../../components/Container";
import {Icon} from "../../components/icon/Icon";
import {LeftMain} from "../section/main/leftMain/LeftMain";
import {RightMain} from "../section/main/rightMain/RightMain";

export const Header = () => {
    return (
        <StyledCenterMain>

            {/*<LeftMain/>*/}
            {/*<RightMain/>*/}

            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <StyledCenterMainTitle>I’m Rayan
                            Adlrdard <span>Front-end</span> Developer</StyledCenterMainTitle>
                        <StyledCenterMainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
                            feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
                            lectus.</StyledCenterMainText>

                        <Link width={"154px"} height={"50px"}>
                            HIRE ME
                            <Icon width={"16px"} height={"16px"} viewBox={"0 0 16 16"} iconId={"arrow-right-black"}/>
                        </Link>
                    </div>
                    <StyledPhoto src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledCenterMain>
    );
};

const StyledCenterMain = styled.header`
    border: 1px solid #0606f5;
    background-color: #ffe4b4;
    display: flex;
    //max-width: 970px;
    //width: 100%;
    //min-height: 100vh;
    position: relative;
    //z-index: 9999999;
`

const StyledCenterMainTitle = styled.h1`

    span {
        color: rgb(255, 180, 0);
    }
`

const StyledCenterMainText = styled.p``

const StyledPhoto = styled.img`
    max-width: 325px;
    min-height: 460px;
    width: auto;
    height: auto;
    object-fit: cover;
    display: flex;
`

//Support - для FlexWrapper задать display: grid; grid-template-columns: 1fr 1fr Также для адаптива сделать imgWrapper


import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/Link/Link";
import photo from "../../../../assets/images/jpg/Good/Good-2/ProfileMain.webp"
import {Container} from "../../../../components/Container";

export const CenterMain = () => {
    return (
        <StyledCenterMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <StyledCenterMainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</StyledCenterMainTitle>
                        <StyledCenterMainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</StyledCenterMainText>
                        <Link name="HIRE ME" iconId="arrow-right-black" widthLink="154px" heightLink="50px"/>
                    </div>
                    <StyledPhoto src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledCenterMain>
    );
};

const StyledCenterMain = styled.div`
    background-color: #fff;
    display: flex;
    min-height: 100vh;
`

const StyledCenterMainTitle = styled.h1`
    
    span {
        color: rgb(255, 180, 0);
    }
`

const StyledCenterMainText = styled.p`
    
`

/*const Box = styled.div`
`*/

const StyledPhoto = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
    display: flex;
`


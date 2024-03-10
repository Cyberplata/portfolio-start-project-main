import React from 'react';
import photoCircle from "../../../../../assets/images/jpg/Good/ProfileCircle.webp";
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Link} from "../../../../../components/link/Link";
import {theme} from "../../../../../styles/Theme";
import available from "../../../../../assets/images/svg/leftMenu-svg/Available.svg";


export const Profile = () => {
    return (
        <StyledProfile>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <Photo src={photoCircle}/>
                <LeftMenuTitle>Rayan Adlardard</LeftMenuTitle>
                <LeftMenuText>Front-end Developer</LeftMenuText>
            </FlexWrapper>
            <LeftMainList>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"facebook"}/>
                    </Link>
                </LeftMainItem>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"instagram"}/>
                    </Link>
                </LeftMainItem>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"twitter"}/>
                    </Link>
                </LeftMainItem>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"linkedin"}/>
                    </Link>
                </LeftMainItem>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"youtube"}/>
                    </Link>
                </LeftMainItem>
                <LeftMainItem>
                    <Link borderRadius={"50%"}>
                        <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"dribbble"}/>
                    </Link>
                </LeftMainItem>
            </LeftMainList>
            <Line></Line>
        </StyledProfile>
    );
};

const Line = styled.div``

const StyledProfile = styled.div`
    outline: 1px solid #0e0d0d;

    ${Line} {
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 0;
            border: 1.5px solid ${theme.colors.secondaryBg};

            position: absolute;
            bottom: -24px;
            z-index: -1;
        }
    }


    background-image: url(${available});
    background-repeat: no-repeat;
    background-position: 158px 116px;
    
`

const Photo = styled.img`
    width: auto;
    height: auto;
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
    border-radius: 50%;

    // background-image: url(${available});
    // background-repeat: no-repeat;
    // background-position: 205px 116px;
`

const LeftMenuTitle = styled.h3`
    //font-family: "Inter", sans-serif;
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
    
    padding-top: 30px;
`

const LeftMenuText = styled.p`
    color: ${theme.colors.fontDiscription};
    //font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing: 0%;
    //text-align: left;
    text-transform: capitalize;
    
    padding: 15px 0;
`

const LeftMainList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //padding-top: 15px;
`

const LeftMainItem = styled.li`

`

// const LeftMainLink = styled.a`
//
// `
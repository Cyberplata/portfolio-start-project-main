import React from 'react';
import photoCircle from "../../../../../assets/images/jpg/Good/ProfileCircle.webp";
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Link} from "../../../../../components/link/Link";

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
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
    border: 1px solid #0e0d0d;
    
`

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
`

const LeftMenuTitle = styled.h3`

`

const LeftMenuText = styled.p`

`

const LeftMainList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const LeftMainItem = styled.li`

`

// const LeftMainLink = styled.a`
//
// `
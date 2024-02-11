import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../../components/logo/Logo";
import {SocialMedia} from "./SocialMedia";
import {GeneralInformation} from "./GeneralInformation";
import {Languages} from "./Languages";
import {Skills} from "./Skills";
import {ExtraSkills} from "./ExtraSkills";
import {LinkAsButton} from "../../../../components/link-as-a-button/LinkAsButton";
import photoCircle from '../../../../assets/images/jpg/Good/ProfileCircle.jpg'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Container} from "../../../../components/Container";
import {Icon} from "../../../../components/icon/Icon";

export const LeftMain = () => {
    return (
        <StyledLeftMenu>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"center"}>
                <Container>
                    <Photo src={photoCircle}/>
                    <LeftMenuTitle>Rayan Adlardard</LeftMenuTitle>
                    <LeftMenuText>Font-end Developer</LeftMenuText>
                    <MainList>
                        <MainItem>
                            <MainLink>
                                <Icon height={"25px"} width={"25px"} iconId={"contrast"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"17px"} width={"15px"} iconId={"home"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"17px"} width={"18px"} iconId={"code"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"17px"} width={"18px"} iconId={"graduate"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"15px"} width={"15px"} iconId={"briefcase"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"14px"} width={"15px"} iconId={"feather"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"15px"} width={"15px"} iconId={"message"}/>
                            </MainLink>
                        </MainItem>
                    </MainList>
                    <GeneralInformation/>
                    <Languages/>
                    <Skills/>
                    <ExtraSkills/>
                    <LinkAsButton/>
                </Container>
            </FlexWrapper>
        </StyledLeftMenu>

    );
};

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

const StyledLeftMenu = styled.header`
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     width: 305px;
    //     //height: 1315px;
    background-color: #d4ffd3;
`

const LeftMenuTitle = styled.h3`

`

const LeftMenuText = styled.p`

`

const MainList = styled.ul`

`

const MainItem = styled.li`

`

const MainLink = styled.a`

`

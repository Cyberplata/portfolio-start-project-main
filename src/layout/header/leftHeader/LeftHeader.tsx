import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {SocialMedia} from "./SocialMedia";
import {GeneralInformation} from "./GeneralInformation";
import {Languages} from "./Languages";
import {Skills} from "./Skills";
import {ExtraSkills} from "./ExtraSkills";
import {LinkAsButton} from "../../../components/link-as-a-button/LinkAsButton";
import photoCircle from '../../../assets/images/jpg/Good/ProfileCircle.jpg'

export const LeftHeader = () => {
    return (
        <StyledLeftMenu>
            <Photo src={photoCircle}/>
                <h3>Rayan Adlardard</h3>
                <p>Font-end Developer</p>
            <Logo/>
            {/*<SocialMedia/>*/}
            <GeneralInformation/>
            <Languages/>
            <Skills/>
            <ExtraSkills/>
            <LinkAsButton/>
        </StyledLeftMenu>
    );
};

const Photo = styled.img`
    //width: 150px;
    //height: 150px;
    //object-fit: cover;
`

const StyledLeftMenu = styled.header`
    //width: 305px;
    //height: 1315px;
    background-color: #d4ffd3;
`
import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {LocationGmailMobile} from "./LocationGmailMobile";

export const ContactInformation = () => {
    return (
        <StyledContactInformation>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <Title>Contact information</Title>

                <LocationGmailMobile iconId={"location"}
                                     width={"40px"}
                                     height={"40px"}
                                     viewBox={"0 0 40 40"}

                                     titleLeftFirst={"Country:"}
                                     descriptionRightFirst={"Bangladesh"}

                                     titleLeftSecond={"City:"}
                                     descriptionRightSecond={"Dhaka"}

                                     titleLeftThird={"Streat:"}
                                     descriptionRightThird={"35 vhatara, Badda"}
                />
                <LocationGmailMobile iconId={"mail"}
                                     width={"40px"}
                                     height={"40px"}
                                     viewBox={"0 0 40 40"}

                                     titleLeftFirst={"Email:"}
                                     descriptionRightFirst={"youremail@gmail.com"}

                                     titleLeftSecond={"Skype:"}
                                     descriptionRightSecond={"@yourusername"}

                                     titleLeftThird={"Telegram:"}
                                     descriptionRightThird={"@yourusername"}
                />
                <LocationGmailMobile iconId={"mobile"}
                                     width={"40px"}
                                     height={"40px"}
                                     viewBox={"0 0 40 40"}

                                     titleLeftFirst={"Support services:"}
                                     descriptionRightFirst={"15369"}

                                     titleLeftSecond={"Office:"}
                                     descriptionRightSecond={"+58 (021)356 587 235"}

                                     titleLeftThird={"Personal:"}
                                     descriptionRightThird={"+58 (021)356 587 235"}
                />

            </FlexWrapper>
        </StyledContactInformation>
    );
};

const StyledContactInformation = styled.div`
    border: 1px solid #0e0d0d;

    max-width: 370px;
    width: 100%;
`

const Title = styled.h2`
    margin-bottom: 50px;
`


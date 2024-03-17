import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

export const LeaveUsYourInfo = () => {
    return (
        <StyledLeaveUsYourInfo>
            <Title>Leave us your info</Title>

            <FlexWrapper direction={"column"} justify={"space-between"} wrap={"wrap"}>

                <StyledForm>

                    <FlexWrapper direction={"column"} gap={"8px"} justify={"space-between"}>
                        <LabelField htmlFor={"fullName"}>Your Full Name ( Required)</LabelField>
                        <Field id={"fullName"} placeholder={"Full Name"}/>
                    </FlexWrapper>

                    <FlexWrapper direction={"column"} gap={"8px"} justify={"space-between"}>
                        <LabelField htmlFor={"yourEmail"}>Your Email ( Required)</LabelField>
                        <Field id={"yourEmail"} type={"email"} placeholder={"email"}/>
                    </FlexWrapper>

                    <FlexWrapper direction={"column"} gap={"8px"} justify={"space-between"}>
                        <LabelField htmlFor={"subject"}>Subject</LabelField>
                        <Field id={"subject"} placeholder={"subject"}/>
                    </FlexWrapper>

                    <FlexWrapper direction={"column"} gap={"8px"} justify={"space-between"}>
                        <LabelField htmlFor={"yourMessage"}>Your Message</LabelField>
                        <Field id={"yourMessage"} as={"textarea"} placeholder={"message"}/>
                    </FlexWrapper>

                    <Button type={"submit"}>send message</Button>
                </StyledForm>
            </FlexWrapper>
        </StyledLeaveUsYourInfo>
    );
};

const StyledLeaveUsYourInfo = styled.div`
    border: 1px solid #0e0d0d;
    //background-color: ${theme.colors.primaryBg};

    max-width: 570px;
    width: 100%;
`

const Title = styled.h2`
    margin-bottom: 50px;
`

const StyledForm = styled.form`
    background-color: ${theme.colors.primaryBg};
    //max-width: 570px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    padding: 25px;

    textarea {
        resize: none;  // Отменяем функцию растягивать input
        height: 210px;
    }
`

const Field = styled.input`
    background-color: ${theme.colors.secondaryBg};
    border: none;
    //max-width: 520px;
    width: 100%;
    padding: 7px 15px;
    //padding-bottom: 25px;

    display: flex;
    height: 50px;

    color: ${theme.colors.fontDiscription};
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 123.6%;
    text-transform: capitalize;
    text-align: left;

    &::placeholder {  // Поменяли цвет подсказки и поменяли строчные на заглавные буквы
        color: ${theme.colors.fontDiscription};
        text-transform: capitalize;
    }
       
    &:focus-visible { // Поменяли цвет обводки при фокусе в input
        outline: 1px solid ${theme.colors.accent};
    }
`

const LabelField = styled.label`
    color: ${theme.colors.fontDiscription};
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
    text-transform: capitalize;
    text-align: left;
    
    //padding-bottom: 8px;
`

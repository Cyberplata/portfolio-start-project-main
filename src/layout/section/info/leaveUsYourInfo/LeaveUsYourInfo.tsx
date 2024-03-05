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
            <FlexWrapper>
                <StyledForm>
                    <LabelField htmlFor={"fullName"}>Your Full Name ( Required)</LabelField>
                    <Field id={"fullName"} placeholder={"Full Name"}/>

                    <LabelField htmlFor={"yourEmail"}>Your Email ( Required)</LabelField>
                    <Field id={"yourEmail"} type={"email"} placeholder={"email"}/>

                    <LabelField htmlFor={"subject"}>Subject</LabelField>
                    <Field id={"subject"} placeholder={"subject"}/>

                    <LabelField htmlFor={"yourMessage"}>Your Message</LabelField>
                    <Field id={"yourMessage"} as={"textarea"} placeholder={"message"}/>

                    {/*<Link width={"160px"} height={"36px"} >send message</Link>*/}
                    <Button type={"submit"}>send message</Button>
                </StyledForm>
            </FlexWrapper>
        </StyledLeaveUsYourInfo>
    );
};

const StyledLeaveUsYourInfo = styled.div`
    border: 1px solid #0e0d0d;
        // background-color: ${theme.colors.primaryBg};

    max-width: 570px;
    width: 100%;
    padding: 15px;
`

const Title = styled.h2`
    margin-bottom: 50px;
`

const StyledForm = styled.form`
    background-color: ${theme.colors.primaryBg};
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Field = styled.input`
    max-width: 520px;
    width: 100%;
    //height: 50px;

    //{as="textarea"} {
    //    height: 210px;
    //}
`

const LabelField = styled.label`
`

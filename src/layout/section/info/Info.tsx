import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {LeaveUsYourInfo} from "./leaveUsYourInfo/LeaveUsYourInfo";
import {ContactInformation} from "./contactInformation/ContactInformation";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Info = () => {
    return (
        <StyledInfo>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <LeaveUsYourInfo/>
                    <ContactInformation/>
                </FlexWrapper>
            </Container>
        </StyledInfo>
    );
};

const StyledInfo = styled.section`
    display: flex;
`
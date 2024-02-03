import React from 'react';
import styled from "styled-components";

export const GeneralInformation = () => {
    return (
        <section>
            <section>
                <span>Age:</span>
                <StyledGeneralInformation paddingLeft={"155px"}>24</StyledGeneralInformation>
            </section>
            <section>
                <span>Residence:</span>
                <StyledGeneralInformation paddingLeft={"110px"}>BD</StyledGeneralInformation>
            </section>
            <section>
                <span>Freelance:</span>
                <StyledGeneralInformation paddingLeft={"70px"}>Available</StyledGeneralInformation>
            </section>
            <section>
                <span>Address:</span>
                <StyledGeneralInformation paddingLeft={"13px"}>Dhaka,Bangladesh</StyledGeneralInformation>
            </section>
        </section>
    );
};

type StyledGeneralInformationPropsType = {
    paddingLeft?: string
}

const StyledGeneralInformation = styled.span<StyledGeneralInformationPropsType>`
    padding-left: ${props => props.paddingLeft || '15px'};
`
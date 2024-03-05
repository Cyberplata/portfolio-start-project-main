import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

type EducationDetilsPropsType = {
    textPlace: string
    textRole: string
    textPeriod: string
    textCertificate: string
    textCertDiscription: string
    marginE?: string
}

export const EducationDetils = (props: EducationDetilsPropsType) => {
    return (
        <StyledEducationDetils >
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

{/*                <FlexWrapper wrap={"wrap"} direction={"column"}>*/}
                <StyledLeftColumn>
                    <PlaceOfTraining>{props.textPlace}</PlaceOfTraining>
                    <Role>{props.textRole}</Role>
                    <PeriodTraining>{props.textPeriod}</PeriodTraining>
                </StyledLeftColumn>

{/*                </FlexWrapper>*/}
{/*                <FlexWrapper wrap={"wrap"} direction={"column"} marginLeft={"180px"}>*/}

                <StyledRightColumn>
                    <Certificate>{props.textCertificate}</Certificate>
                    <CertificateDiscription>{props.textCertDiscription}</CertificateDiscription>
                </StyledRightColumn>

{/*                </FlexWrapper>*/}

            </FlexWrapper>
        </StyledEducationDetils>
    );
};


type StyledEducationDetilsPropsType = {
    marginE?: string
}

const StyledEducationDetils = styled.div<StyledEducationDetilsPropsType>`
    background-color: #fff;

    margin: ${props => props.marginE};
`

const StyledLeftColumn = styled.div`
    border: 1px solid black;
    max-width: 208px;
    width: 100%;
`

const StyledRightColumn = styled.div`
    border: 1px solid black;
    max-width: 536px;
    width: 100%;
    //margin-left: 180px;
`

const PlaceOfTraining = styled.h3`
    
`

const Role = styled.p`
    
`

const PeriodTraining = styled.span`
    
`

const Certificate = styled.h3`
 
`

const CertificateDiscription = styled.p`
    
`

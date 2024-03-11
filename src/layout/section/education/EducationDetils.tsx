import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Line} from "../../../components/Line";

type EducationDetilsPropsType = {
    textPlace: string
    textRole: string
    textPeriod: string
    textCertificate: string
    textCertDiscription: string
    // marginE?: string
}

export const EducationDetils = (props: EducationDetilsPropsType) => {
    return (
        <StyledEducationDetils>
            <FlexWrapper justify={"space-between"}>

                <StyledLeftColumn>
                    <PlaceOfTraining>{props.textPlace}</PlaceOfTraining>
                    <Role>{props.textRole}</Role>
                    <PeriodTraining>{props.textPeriod}</PeriodTraining>
                </StyledLeftColumn>

                <StyledRightColumn>
                    <Certificate>{props.textCertificate}</Certificate>
                    <CertificateDiscription>{props.textCertDiscription}</CertificateDiscription>
                </StyledRightColumn>

            </FlexWrapper>
            <Line/>
        </StyledEducationDetils>
    );
};


// type StyledEducationDetilsPropsType = {
//     marginE?: string
// }

const StyledEducationDetils = styled.div`
    //background-color: #fff;
    
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

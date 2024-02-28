import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

type WorkHistoryDetilsPropsType = {
    textPlace: string
    textRole: string
    textPeriod: string
    textCertificate: string
    textCertDiscription: string
    marginE?: string
}

export const WorkHistoryDetils = (props: WorkHistoryDetilsPropsType) => {
    return (
        <StyledWorkHistoryDetils >
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

{/*                <FlexWrapper wrap={"wrap"} direction={"column"}>*/}
                <StyledLeftColumn>
                    <PlaceOfWork>{props.textPlace}</PlaceOfWork>
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
        </StyledWorkHistoryDetils>
    );
};


type StyledWorkHistoryDetilsPropsType = {
    marginE?: string
}

const StyledWorkHistoryDetils = styled.div<StyledWorkHistoryDetilsPropsType>`
    background-color: #fff;

    margin: ${props => props.marginE};
`

const StyledLeftColumn = styled.div`
    border: 1px solid black;
    width: 208px;
`

const StyledRightColumn = styled.div`
    border: 1px solid black;
    width: 536px;
    margin-left: 180px;
`

const PlaceOfWork = styled.h3`
    
`

const Role = styled.p`
    
`

const PeriodTraining = styled.span`
    
`

const Certificate = styled.h3`
 
`

const CertificateDiscription = styled.p`
    
`

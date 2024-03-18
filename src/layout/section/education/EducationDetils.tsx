import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Line} from "../../../components/Line";
import {theme} from "../../../styles/Theme";

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
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>

                <StyledLeftColumn>
                    <PlaceOfTraining>{props.textPlace}</PlaceOfTraining>
                    {/*<FlexWrapper justify={"space-between"} align={"center"}>*/}
                    <Box>
                        <Role>{props.textRole}</Role>
                        <PeriodTraining width={"111px"} height={"18px"}>{props.textPeriod}</PeriodTraining>
                    </Box>
                    {/*</FlexWrapper>*/}
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
    outline: 1px solid green;
    //flex-grow: 1;
    
`

const StyledLeftColumn = styled.div`
    outline: 1px solid black;
    max-width: 208px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
`

const StyledRightColumn = styled.div`
    outline: 1px solid black;
    max-width: 536px;
    width: 100%;
    //margin-left: 180px;
`

const PlaceOfTraining = styled.h3`
    text-align: left;
`

const Box = styled.div`
    display: flex;
    //justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    //padding: 20px 0;
`

const Role = styled.span`
    color: ${theme.colors.font};
    text-align: left;
`

type PeriodTrainingPropsType = {
    width?: string
    height?: string
}

const PeriodTraining = styled.span<PeriodTrainingPropsType>`
    color: ${theme.colors.primaryBg};
    font-size: 10px;
    font-weight: 400;
    line-height: 100.9%;
    text-align: left;
    
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        width: ${props => props.width};
        height: ${props => props.height};
        background-color: ${theme.colors.accent};

        position: absolute;
        z-index: -1;
        left: -7px;
        bottom: 0;
        //overflow: hidden;
        transform: translateY(4px);
    }
`

const Certificate = styled.h3`
    text-align: left;
`

const CertificateDiscription = styled.p`
    text-align: left;
    
    padding-top: 25px;
`

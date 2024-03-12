import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {EducationDetils} from "./EducationDetils";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>

                <SectionTitle textTitle={"Education"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <BoxBackgroundEducation>
                    <FlexWrapper direction={"column"} wrap={"wrap"}>
                        <EducationDetils textPlace={"University of Toronto"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>

                        <StyledCenterBox>
                            <EducationDetils textPlace={"Programming Course"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."} />
                        </StyledCenterBox>

                        <EducationDetils textPlace={"Web developer courses"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                    </FlexWrapper>
                </BoxBackgroundEducation>


            </Container>
        </StyledEducation>
    );
};



const StyledEducation = styled.section`
    display: flex;
    
    //padding: 42px 30px;
`

const BoxBackgroundEducation = styled.div`
    background-color: ${theme.colors.primaryBg};

    padding: 42px 30px;
`

const StyledCenterBox = styled.div`
    margin: 50px 0;
`


import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {WorkHistoryDetils} from "./WorkHistoryDetils";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const WorkHistory = () => {
    return (
        <StyledEducation>
            <Container>

                <SectionTitle textTitle={"Work History"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <BoxBackgroundWorkHistory>
                    <FlexWrapper direction={"column"} wrap={"wrap"}>
                        <WorkHistoryDetils textPlace={"Lead Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>

                        <StyledCenterBox>
                            <WorkHistoryDetils textPlace={"Junior Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."} />
                        </StyledCenterBox>

                        <WorkHistoryDetils textPlace={"Senior Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
                    </FlexWrapper>
                </BoxBackgroundWorkHistory>


            </Container>
        </StyledEducation>
    );
};



const StyledEducation = styled.section`
    display: flex;
`

const BoxBackgroundWorkHistory = styled.div`
    background-color: ${theme.colors.primaryBg};

    padding: 42px 30px;
`

const StyledCenterBox = styled.div`
    margin: 50px 0;
`


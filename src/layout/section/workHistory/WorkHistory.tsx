import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {WorkHistoryDetils} from "./WorkHistoryDetils";


export const WorkHistory = () => {
    return (
        <StyledWorkHistory>
            <Container>

                <SectionTitle textTitle={"Work History"} textDiscription={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}/>

                <WorkHistoryDetils textPlace={"Lead Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>

                <StyledCenterBox>
                    <WorkHistoryDetils textPlace={"Junior Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."} />
                </StyledCenterBox>

                <WorkHistoryDetils textPlace={"Senior Web Designer"} textRole={"Student"} textPeriod={"Jan 1016 - Dec 2021"} textCertificate={"Certificate of web training"} textCertDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>

            </Container>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
    background-color: #f8b2b2;
    min-height: 100vh;
    display: flex;
    position: relative;
    //z-index: 99999;

    border: 1px solid #0606f5;
`

const StyledCenterBox = styled.div`
    margin: 40px 0 58px;
`


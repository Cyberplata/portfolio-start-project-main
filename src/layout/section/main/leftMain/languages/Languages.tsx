import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const Languages = () => {
    return (
        <StyledLanguages>
            <LanguagesTitle>Languages</LanguagesTitle>
            <FlexWrapper direction={"column"}>
                <LanguagesSection>
                    <span>Bangla</span>
                    <span>100%</span>
                </LanguagesSection>
                <LanguagesSection>
                    <span>English</span>
                    <span>80%</span>
                </LanguagesSection>
                <LanguagesSection>
                    <span>Spanish</span>
                    <span>60%</span>
                </LanguagesSection>
            </FlexWrapper>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.div`
    outline: 1px solid #0e0d0d;
`

const LanguagesTitle = styled.h3`

`

const LanguagesSection = styled.section`
    display: flex;
    justify-content: space-between;
`
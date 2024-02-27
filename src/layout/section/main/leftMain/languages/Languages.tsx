import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const Languages = () => {
    return (
        <StyledLanguages>
            <LanguagesTitle>Languages</LanguagesTitle>
            <FlexWrapper direction={"column"}>
                <LanguagesContent>
                    <span>Bangla</span>
                    <span>100%</span>
                </LanguagesContent>
                <LanguagesContent>
                    <span>English</span>
                    <span>80%</span>
                </LanguagesContent>
                <LanguagesContent>
                    <span>Spanish</span>
                    <span>60%</span>
                </LanguagesContent>
            </FlexWrapper>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.div`
    outline: 1px solid #0e0d0d;
`

const LanguagesTitle = styled.h3`

`

const LanguagesContent = styled.div`
    display: flex;
    justify-content: space-between;
`
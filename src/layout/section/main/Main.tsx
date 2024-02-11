import React from 'react';
import {LeftMain} from "./leftMain/LeftMain";
import {CenterMain} from "./centerMain/CenterMain";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {RightMain} from "./rightMain/RightMain";

export const Main = () => {
    return (
        <FlexWrapper>
            <Container>
                <LeftMain/>
                <CenterMain/>
                <RightMain/>
            </Container>
        </FlexWrapper>
    );
};
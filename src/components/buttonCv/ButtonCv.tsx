import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const ButtonCv = () => {
    return (
        <StyledButtonCv href="">DOWNLOAD CV<Icon iconId={"vectorArrowDown"}/></StyledButtonCv>
    );
};

const StyledButtonCv = styled.a`
    background: rgb(255, 180, 0);
`
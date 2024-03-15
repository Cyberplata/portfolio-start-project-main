import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"center"} align={"center"} gap={"15px"}>
                <Copyright>
                    <Icon iconId={"copyright"} width={"24"} height={"24"} viewBox={"0 0 24 24"}/>
                    2021 All Rights Reserved.Ojjomedia
                </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    //background-color: rgb(253, 189, 158);
    //min-height: 5vh;
    margin: 0 auto;
    max-width: 1030px;
    
    padding: 14px 0;
`

const Copyright = styled.small`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
`
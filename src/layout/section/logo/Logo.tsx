import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <LogoList>
                        <LogoItem>
                            <LogoLink>
                                <Icon iconId={"petroleum"} width={"140px"} height={"140px"} viewBox={"0 0 140 140"}/>
                            </LogoLink>
                        </LogoItem>
                        <LogoItem>
                            <LogoLink>
                                <Icon iconId={"filling"} width={"140px"} height={"140px"} viewBox={"0 0 140 140"}/>
                            </LogoLink>
                        </LogoItem>
                        <LogoItem>
                            <LogoLink>
                                <Icon iconId={"petrol"} width={"140px"} height={"140px"} viewBox={"0 0 140 140"}/>
                            </LogoLink>
                        </LogoItem>
                        <LogoItem>
                            <LogoLink>
                                <Icon iconId={"station"} width={"140px"} height={"140px"} viewBox={"0 0 140 140"}/>
                            </LogoLink>
                        </LogoItem>
                    </LogoList>
                </FlexWrapper>
            </Container>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    background-color: #b5ffb5;
    min-height: 20vh;
`

const LogoList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 130px;
`

const LogoItem = styled.li`

`

const LogoLink = styled.a`

`

import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} width={"100%"}>
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

const StyledLogo = styled.section`
    //background-color: #b5ffb5;
    //min-height: 20vh;
    //width: 100%;
    display: flex;
`

const LogoList = styled.ul`
    display: flex;
    //flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //gap: 130px;
    width: 100%;
    flex-wrap: wrap;
`

const LogoItem = styled.li`

`

const LogoLink = styled.a`

`

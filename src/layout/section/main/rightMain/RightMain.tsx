import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
// import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Link} from "../../../../components/link/Link";
import {LogoSvg} from "../../../../components/logoSvg/LogoSvg";
import {theme} from "../../../../styles/Theme";


export const RightMain = () => {
    return (
        <StyledRightMain>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"} gap={"212px"} >

                    <LogoSvg/>

                    <MainList>
                        <MainItem>
                            <Link backgroundColor={"none"} color={"red"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"home"}/>
                            </Link>
                        </MainItem>
                        <MainItem>
                            <Link backgroundColor={"none"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"service"}/>
                            </Link>
                        </MainItem>
                        <MainItem>
                            <Link backgroundColor={"none"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"сv"}/>
                            </Link>
                        </MainItem>
                        <MainItem>
                            <Link backgroundColor={"none"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"portfolio"}/>
                            </Link>
                        </MainItem>
                        <MainItem>
                            <Link backgroundColor={"none"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"blog"}/>
                            </Link>
                        </MainItem>
                        <MainItem>
                            <Link backgroundColor={"none"}>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"contact"}/>
                            </Link>
                        </MainItem>
                    </MainList>
                </FlexWrapper>
        </StyledRightMain>
    );
};

const StyledRightMain = styled.aside`
    max-width: 108px;
    width: 100%;
    background-color: #dbdfff;
    min-height: 100vh;
    padding: 50px 34px;

    position: relative;
    right: 0;
    top: 0;
    z-index: 99;
`

const MainList = styled.ul`
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    gap: 40px;
    
    position: relative;
`

const MainItem = styled.li`

    //:not[iconId={"home"}]
    
    ${Link}:hover {
        fill: currentColor;
        stroke: currentColor;
        color: ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        
        /*position: absolute;
        //content: attr(data-title);
        content: "Hello";
        top: 0;
        left: 0;*/
    }
`

// const MainLink = styled.a`
//
// `

import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
// import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";


export const RightMain = () => {
    return (
        <StyledRightMain>
                <FlexWrapper direction={"column"}>
                    <MainList>
                        <MainItem>
                            <MainLink>
                                <Icon height={"30px"} width={"30px"} viewBox={"0 0 30 30"} iconId={"contrast"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"home"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"service"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"сv"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"portfolio"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"blog"}/>
                            </MainLink>
                        </MainItem>
                        <MainItem>
                            <MainLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40 40"} iconId={"contact"}/>
                            </MainLink>
                        </MainItem>
                    </MainList>
                </FlexWrapper>
        </StyledRightMain>
    );
};

const StyledRightMain = styled.div`
    outline: 1px solid #0000ff;
`

const MainList = styled.ul`

`

const MainItem = styled.li`

`

const MainLink = styled.a`

`

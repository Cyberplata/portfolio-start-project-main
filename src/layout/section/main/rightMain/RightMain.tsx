import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";


export const RightMain = () => {
    return (
        <StyledRightMain>
            <MainList>
                <MainItem>
                    <MainLink>
                        <Icon height={"25px"} width={"25px"} iconId={"contrast"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"17px"} width={"15px"} iconId={"home"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"17px"} width={"18px"} iconId={"code"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"17px"} width={"18px"} iconId={"graduate"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"15px"} width={"15px"} iconId={"briefcase"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"14px"} width={"15px"} iconId={"feather"}/>
                    </MainLink>
                </MainItem>
                <MainItem>
                    <MainLink>
                        <Icon height={"15px"} width={"15px"} iconId={"message"}/>
                    </MainLink>
                </MainItem>
            </MainList>
        </StyledRightMain>
    );
};

const StyledRightMain = styled.div`

`

const MainList = styled.ul`

`

const MainItem = styled.li`

`

const MainLink = styled.a`

`

import React from 'react';
import photoCircle from "../../../../../assets/images/jpg/Good/ProfileCircle.jpg";
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";

export const Profile = () => {
    return (
        <StyledProfile>
            <Photo src={photoCircle}/>
            <LeftMenuTitle>Rayan Adlardard</LeftMenuTitle>
            <LeftMenuText>Font-end Developer</LeftMenuText>
            <LeftMainList>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"facebook"}/>
                    </LeftMainLink>
                </LeftMainItem>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"instagram"}/>
                    </LeftMainLink>
                </LeftMainItem>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"twitter"}/>
                    </LeftMainLink>
                </LeftMainItem>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"linkedin"}/>
                    </LeftMainLink>
                </LeftMainItem>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"youtube"}/>
                    </LeftMainLink>
                </LeftMainItem>
                <LeftMainItem>
                    <LeftMainLink>
                        <Icon height={"24px"} width={"24px"} iconId={"dribbble"}/>
                    </LeftMainLink>
                </LeftMainItem>
            </LeftMainList>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 1px solid #0e0d0d;
`

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

const LeftMenuTitle = styled.h3`

`

const LeftMenuText = styled.p`

`

const LeftMainList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const LeftMainItem = styled.li`

`

const LeftMainLink = styled.a`

`
import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ServicesPropsType = {
    itemPrice?: string
    icon?: React.ReactNode
}

export const Services = (props: ServicesPropsType) => {
    return (
        <StyledServices>
            <ul>
                <ItemListServices>
                    <FlexWrapper align={"center"} gap={"15px"}>
                    {/*<div>*/}
                        {props.icon}
                        {props.itemPrice}
                    {/*</div>*/}
                    </FlexWrapper>
                </ItemListServices>
            </ul>
        </StyledServices>
    );
};

const StyledServices = styled.nav`
    //outline: 1px solid #0e0d0d;
    //margin: 20px 0 32px;
    width: 100%;

    ul {
        //margin: 10px 0;
        //outline: 1px solid #0e0d0d;
    }
`

const ItemListServices = styled.li`
    outline: 1px solid #0e0d0d;
    //margin: 10px 0;
`
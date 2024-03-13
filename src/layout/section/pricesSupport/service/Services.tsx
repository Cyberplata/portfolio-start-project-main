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
                    {/*<FlexWrapper align={"center"} >*/}
                    <div>
                        {props.icon}
                        {props.itemPrice}
                    </div>
                    {/*</FlexWrapper>*/}
                </ItemListServices>
            </ul>
        </StyledServices>
    );
};

const StyledServices = styled.nav`
    //outline: 1px solid #0e0d0d;
    //margin: 20px 0 32px;
    //width: 100%;

    ul {

    }
`

const ItemListServices = styled.li`

`
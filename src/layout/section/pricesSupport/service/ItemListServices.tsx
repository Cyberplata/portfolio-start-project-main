import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ItemListServicesPropsType = {
    itemText?: string
    icon?: React.ReactNode
    fontColor?: boolean
}

export const ItemListServices = (props: ItemListServicesPropsType) => {
    return (
        <StyledItemListServices>
            <FlexWrapper align={"center"} gap={"15px"}>
                {props.icon}
                {props.itemText}
                {props.fontColor}
            </FlexWrapper>
        </StyledItemListServices>
    );
};

const StyledItemListServices = styled.li`
    width: 100%;
`

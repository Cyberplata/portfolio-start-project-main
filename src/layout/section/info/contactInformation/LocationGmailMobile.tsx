import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type LocationGmailMobilePropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

    titleLeftFirst: string
    descriptionRightFirst: string
    titleLeftSecond: string
    descriptionRightSecond: string
    titleLeftThird: string
    descriptionRightThird: string
}

export const LocationGmailMobile = (props: LocationGmailMobilePropsType) => {
    return (
        <StyledLocationGmailMobile>

            <Icon iconId={props.iconId}
                  width={props.width}
                  height={props.height}
                  viewBox={props.viewBox}
            />
            <FlexWrapper justify={"space-between"}>
                <span>{props.titleLeftFirst}</span>
                <span>{props.descriptionRightFirst}</span>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <span>{props.titleLeftSecond}</span>
                <span>{props.descriptionRightSecond}</span>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <span>{props.titleLeftThird}</span>
                <span>{props.descriptionRightThird}</span>
            </FlexWrapper>

        </StyledLocationGmailMobile>
    );
};

const StyledLocationGmailMobile = styled.div`
    border: 1px solid #06ef0b;
    //max-height: 210px;
    max-width: 370px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 16px; //???
    
    background-color: ${theme.colors.primaryBg};
`
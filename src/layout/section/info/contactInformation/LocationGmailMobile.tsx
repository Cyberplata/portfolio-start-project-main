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
            <IconWrapper>
                <Icon iconId={props.iconId}
                      width={props.width}
                      height={props.height}
                      viewBox={props.viewBox}
                />
            </IconWrapper>

            <FlexWrapper direction={"column"} justify={"space-between"} gap={"16px"}>

                <FlexWrapper justify={"space-between"} >
                    <LeftColumnName>{props.titleLeftFirst}</LeftColumnName>
                    <RightColumnDescription>{props.descriptionRightFirst}</RightColumnDescription>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"} >
                    <LeftColumnName>{props.titleLeftSecond}</LeftColumnName>
                    <RightColumnDescription>{props.descriptionRightSecond}</RightColumnDescription>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"} >
                    <LeftColumnName>{props.titleLeftThird}</LeftColumnName>
                    <RightColumnDescription>{props.descriptionRightThird}</RightColumnDescription>
                </FlexWrapper>

            </FlexWrapper>
        </StyledLocationGmailMobile>
    );
};


const StyledLocationGmailMobile = styled.div`
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #06ef0b;
    max-width: 370px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    
    padding: 25px 25px 15px;
    //gap: 18px; //???
`

const IconWrapper = styled.div`
    margin: 0 auto;
    padding-bottom: 20px;
`

const LeftColumnName = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
    text-align: left;
`

const RightColumnDescription = styled.span`
    text-align: right;
`
import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Services} from "../service/Services";


type PricePlansSupportPropsType = {
    title?: string
    price: string
    text: string
    isMostPopular?: boolean
    arrayServiceItems: any[]
}

export const PricePlansSupport = (props: PricePlansSupportPropsType) => {
    return (
        <StyledPricePlansSupport>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"} wrap={"wrap"}>
                <PriceTitle>{props.title}</PriceTitle>
                <Value>
                    <ValuePrice>
                        {props.price} <span>/Hour</span>
                    </ValuePrice>
                    <ValueText>{props.text}</ValueText>
                </Value>

                { props.arrayServiceItems.map( (item) => {
                    return <Services itemPrice={item.text}
                                     icon={item.icon}
                           />
                  })
                }

                <Link width={"170px"}
                      height={"38px"}
                      borderRadius={"30px"}
                      backgroundColor={"rgb(255, 255, 255)"}
                      boxShadow={"0px 1px 10px 0px rgba(0, 0, 0, 0.15)"}
                >
                    ORDER NOW
                </Link>
            </FlexWrapper>
        </StyledPricePlansSupport>
    );
};

const StyledPricePlansSupport = styled.div`
    outline: 1px solid black;
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    width: 100%;
    padding: 54px 30px 25px;

    ${Link} {
        color: ${theme.colors.font};
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        text-transform: capitalize;
    }

    ${Link}:hover {
        background-color: ${theme.colors.accent};
    }
`

const PriceTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`

const Value = styled.div`

`

const ValuePrice = styled.p`
    color: ${theme.colors.font};
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
`

const ValueText = styled.p`

`

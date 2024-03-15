import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ItemListServices} from "../service/ItemListServices";
import {silverItems} from "../arrayServiceItems/silverItems";


type PricePlansSupportPropsType = {
    title?: string
    price: string
    text: string
    isMostPopular?: boolean
    arrayServiceItems: any[]
    // active?: boolean
}

export const PricePlansSupport = (props: PricePlansSupportPropsType) => {
    return (
        <StyledPricePlansSupport>

            {props.isMostPopular &&
                (<ServiceMostPopular>
                    Most Popular
                </ServiceMostPopular>)
            }

            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <PriceTitle>{props.title}</PriceTitle>
                <Value>
                    <ValuePrice>
                        {props.price} <span>/Hour</span>
                    </ValuePrice>
                    <ValueText>{props.text}</ValueText>
                </Value>
            </FlexWrapper>

            <nav>
                <ul>
                    {props.arrayServiceItems.map((item) => {
                        return <ItemListServices itemText={item.text}
                                                 icon={item.icon}
                               />
                    })}
                </ul>
            </nav>


            <Link width={"170px"}
                  height={"38px"}
                  borderRadius={"30px"}
                  backgroundColor={"rgb(255, 255, 255)"}
                  boxShadow={"0px 1px 10px 0px rgba(0, 0, 0, 0.15)"}
            >
                ORDER NOW
            </Link>

        </StyledPricePlansSupport>
    );
};

const ServiceMostPopular = styled.div`
    
`

const StyledPricePlansSupport = styled.div`
    outline: 1px solid black;
    background-color: ${theme.colors.primaryBg};
    max-width: 310px;
    width: 100%;
    padding: 54px 30px 25px;

    position: relative;
    
    ${ServiceMostPopular} {
        position: absolute;
        top: 0;
        left: 0;

        background-color: ${theme.colors.accent};
        height: 30px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        text-transform: capitalize;
    }
    
    
    
    ul {
        //outline: 1px solid red;
        padding: 20px 0;

        color: ${theme.colors.fontDiscription};
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        text-transform: capitalize;
        text-align: center;
        
        {}
    }
    
    li+li {
        
        padding-top: 16px;
        
    }

    ${Link} {
        color: ${theme.colors.font};
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        text-transform: capitalize;
        margin: 0 auto;
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
    padding: 20px 0 10px;
`

const ValueText = styled.p`

`

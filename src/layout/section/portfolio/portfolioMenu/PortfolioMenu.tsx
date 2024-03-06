import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const PortfolioMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledPortfolioMenu>
            <ul>
                {props.menuItems.map( (item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>

                        </Link>
                    </ListItem>
                } )}
            </ul>
        </StyledPortfolioMenu>
    );
};

const StyledPortfolioMenu = styled.nav`
    outline: 1px solid #0e0d0d;
    margin-bottom: 50px;
    
    ul {
        display: flex;
        gap: 36px;
        justify-content: center;
    }
`

const Link = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: transparent;
    
    &:hover {
        color: ${theme.colors.accent};

        font-family: "Inter", sans-serif;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.font};

    & + & {  // Если следующий span после span есть, то применяются свойства
        top: 50%;  // Условная линия, где будет разрыв Масок
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;  // Выравниваем полоску по центру слов + чтобы она выходила на 10px по бокам
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);  // делаем линию по дефолту невидимой
    }

    &:hover {
        &::before {
            transform: scale(1); // при наведении линия становится видимой
        }

        ${Mask} {
            transform: skewX(12deg) translateX(2px); // наклоняет буквы по оси Х на 12градусов влево и сдвигает верхнюю Маску вправо на 5px
            color: ${theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-2px); // тоже самое только для других-нижних Масок и сдвигает влево на 5px
            }
        }
    }
`
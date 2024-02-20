import styled from "styled-components";

export const SectionTitle = styled.h2`
    text-align: center;
    /*letter-spacing: 5px;
    margin-bottom: 90px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;*/
    
    position: relative;

/*    p {
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum";
    }*/
    
    &::after {
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum";
        
        display: inline-block;
        position: absolute;
        left: 25%;
        top: 50px;
        max-width: 438px;
        width: 100%;

        color: rgb(118, 118, 118);
        //font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: center;
        text-transform: capitalize;
    }
    
    /*&::before { // сделали нашу линию после заголовка
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ;
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media  {
            bottom: -24px;
        }
    }*/
`
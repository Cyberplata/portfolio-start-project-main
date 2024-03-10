import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";

export const Map = () => {
    return (
        <StyledMap>
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149422.55739366444!2d37.462640335680184!3d54.18490244282182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41343f84ed31c1fd%3A0xa3a7e25d4ca39145!2sTula%2C%20Tula%20Oblast!5e0!3m2!1sen!2sru!4v1709476521648!5m2!1sen!2sru"
                    width="100%"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>


                {/*<iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.618551%2C54.181173&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1NzEzMxIW0KDQvtGB0YHQuNGPLCDQotGD0LvQsCIKDSp4FkIVwsVYQg%2C%2C&z=11.42"
                    width="100%"
                    height="300"
                    frameBorder="1"></iframe>*/}


            </Container>
        </StyledMap>
    );
};

const StyledMap = styled.section`
    //border: 1px solid blue;
    //background-color: #d0acad;
    //min-height: 35vh;
    display: flex;
`


//Google map

    {/*<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149422.55739366444!2d37.462640335680184!3d54.18490244282182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41343f84ed31c1fd%3A0xa3a7e25d4ca39145!2sTula%2C%20Tula%20Oblast!5e0!3m2!1sen!2sru!4v1709476521648!5m2!1sen!2sru"
        width="600" 
        height="450" 
        style="border:0;" 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>*/}


//Yandex map

{/*<div style="position:relative;overflow:hidden;"><a
        href="https://yandex.ru/maps/15/tula/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;">Тула</a><a
        href="https://yandex.ru/maps/geo/tula/53057133/?ll=37.618551%2C54.181173&utm_medium=mapframe&utm_source=maps&z=11.42"
        style="color:#eee;font-size:12px;position:absolute;top:14px;">Тула — Яндекс Карты</a>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.618551%2C54.181173&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1NzEzMxIW0KDQvtGB0YHQuNGPLCDQotGD0LvQsCIKDSp4FkIVwsVYQg%2C%2C&z=11.42"
            width="560" height="400" frameBorder="1" allowFullScreen="true"
            style="position:relative;"></iframe>
    </div>*/}
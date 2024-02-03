import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <a href="">
            <Icon iconId={'facebook'}/>
            <Box>
                <Icon iconId={'instagram'}/>
            </Box>
            <Box>
                <Icon iconId={'twitter'}/>
            </Box>
            <Box>
                <Icon iconId={'linkedin'}/>
            </Box>
            <Box>
                <Icon iconId={'youtube'}/>
            </Box>
            <Box>
                <Icon iconId={'dribbble'}/>
            </Box>
        </a>
    );
};

const Box = styled.span`
    margin-left: 15px;
`
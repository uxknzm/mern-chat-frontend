import React from 'react';

import readedSvg from "../../assets/img/read.svg"
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import noread from "../../assets/img/noRead.svg"

const IconRead = ({ isReaded, color = "blue" }: any) => {    
    return (
        <>
            {isReaded ? <BsCheck2All color={color} /> : <BsCheck2 color={color} />}
        </>
    );
};

export default IconRead;
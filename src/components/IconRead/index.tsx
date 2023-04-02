import React from 'react';

import readedSvg from "../../assets/img/read.svg"
import noread from "../../assets/img/noRead.svg"

const IconRead = ({ isReaded }: any) => {
    return (
        <>
            {isReaded ? <img src={readedSvg} alt="readIcon" /> : <img src={noread} alt="readIcon" />}
        </>
    );
};

export default IconRead;
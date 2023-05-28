import { Card } from 'antd';
import React from 'react';

const CardComponent = ({ children, width = 700, height }: any) => {
    return (
        <Card style={{
            width,
            margin: "0px 0px 2rem",
            padding: 0,
            backgroundColor: "rgb(26, 26, 26)",
            borderRadius: "0.75rem",
            textAlign: "start",
            border: "none",
            overflow: "auto",
            height
        }}>
            {children}
        </Card>
    );
};

export default CardComponent;
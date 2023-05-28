import React from 'react';

const ViewsProfile = () => {
    return (
        <div style={{ padding: "1rem 0px", color: "white" }}>
            <h4 style={{
                textAlign: "start",
                fontWeight: 500,
                margin: "0px 0px 0.7rem",
                fontSize: "0.857143rem",
                lineHeight: 1.5,
                color: "rgb(194, 194, 194)"
            }}>VIEWS</h4>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Who viewed your profile</span>
                <span>1111</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Impressions of your post</span>
                <span>2222</span>
            </div>
        </div>
    );
};

export default ViewsProfile;
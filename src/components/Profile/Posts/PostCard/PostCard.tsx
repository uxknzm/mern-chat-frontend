import React, { useState } from 'react';
import { AiFillHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlineUserAdd } from 'react-icons/ai';

import CardComponent from '../../../Card';
import Avatar from '../../../Avatar/Avatar';

const PostCard = ({ fullname, avatar, myAvatar }: any) => {
  return (
    <CardComponent width={700}>
      <div style={{
        color: "white",
        gap: "0.5rem",
        paddingBottom: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Avatar size={60} />
          <div style={{ marginLeft: 10, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h4>NAME</h4>
            <span>date create post</span>
          </div>
        </div>
        <AiOutlineUserAdd size={20} />
      </div>
      <p style={{ color: "white" }} >POST TEXT</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
        <img
          src="https://res.cloudinary.com/diskudcr3/image/upload/v1685097594/chatter/lp1pymo3yohm8wuyoayq.png"
          alt="post"
          style={{
            borderRadius: "0.75rem",
            marginTop: " 0.75rem",
            height: "450px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }} >
        <div style={{ display: "flex", gap: 20, alignItems: "center" }} >
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <AiFillHeart color='white' size={30} />
            count
          </div>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <AiOutlineComment color='white' size={30} />
            count
          </div>
        </div>
        <AiOutlineShareAlt color="white" size={30} />
      </div>
      <div style={{ marginTop: "1rem", }} >
      <p style={{ color: "rgb(194, 194, 194)" }}>view count comments</p>
      </div>
    </CardComponent>
  );
};

export default PostCard;
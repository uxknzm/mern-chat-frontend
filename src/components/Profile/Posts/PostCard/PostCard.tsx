import React, { useState } from 'react';
import { AiFillHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlineUserAdd } from 'react-icons/ai';

import CardComponent from '../../../Card';
import Avatar from '../../../Avatar/Avatar';

const PostCard = ({ fullname, avatar, myAvatar }: any) => {
  return (
    <CardComponent width={700}>
      <div className="flex justify-between items-center text-white gap-2 pb-4">
        <div className="flex justify-between items-center">
          <Avatar size={60} />
          <div className="flex flex-col items-start ml-4">
            <h4>NAME</h4>
            <span>date create post</span>
          </div>
        </div>
        <AiOutlineUserAdd size={20} />
      </div>
      <p className="text-white">POST TEXT</p>
      <div className="flex justify-between items-center">
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
      <div className="flex justify-between items-center mt-4" >
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <AiFillHeart color='white' size={30} />
            count
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineComment color='white' size={30} />
            count
          </div>
        </div>
        <AiOutlineShareAlt color="white" size={30} />
      </div>
      <div className="mt-4">
        <p className="text-slate-400">view count comments</p>
      </div>
    </CardComponent>
  );
};

export default PostCard;
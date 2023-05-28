import React from 'react';
import { Button, Input } from 'antd';
import CardComponent from '../../../Card';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../../../redux/slices/profileSlice';
import { AiOutlineFileImage } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

const PostCreate = () => {
  const info = useSelector(aboutMe);
  const { id } = useParams();
  const { fullname, _id }: any = info;
  const isMe = _id === id;


  if (id && !isMe) {
    return null;
  };

  return (
    <CardComponent width={700} >
      <Input style={{
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "2rem",
        padding: "1rem 2rem",
        boxShadow: "none",
        border: "none"
      }} placeholder={`Whats on your mind, ${fullname}?`} />
      <hr className="border-solid border-white my-5 mx-0" />
      <div className="flex items-center justify-between g-6">
        <AiOutlineFileImage color="white" size={20} />
        <Button className='bg-gray-500' type='primary'>POST</Button>
      </div>
    </CardComponent >
  );
};

export default PostCreate;
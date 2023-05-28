import React from 'react';
import { Button, Input } from 'antd';
import CardComponent from '../../../Card';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../../../redux/slices/profileSlice';

const PostCreate = () => {
  const info = useSelector(aboutMe);
  const { fullname }: any = info;
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
      <hr style={{
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.12)",
        margin: "1.25rem 0px",
      }} />
      <div style={{
        gap: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Button>IMAGE</Button>
        <Button className='bg-gray-500' type='primary'>POST</Button>
      </div>
    </CardComponent >
  );
};

export default PostCreate;
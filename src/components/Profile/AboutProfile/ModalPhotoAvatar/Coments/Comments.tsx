import { Empty } from 'antd';
import React from 'react';
import Avatar from '../../../../Avatar/Avatar';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';

const Comments = ({ myAvatar, avatar, fullname }: any) => {
    return (
        <div className="flex flex-col w-full justify-between items-center">
            <div className="flex flex-col w-full justify-between pl-2">
            <div className="flex w-full pb-2 items-center gap-3">
                <Avatar avatar={avatar} size={45} />
                <div className="flex flex-col">
                    <span className="mr-1 font-semibold cursor-pointer hover:underline">
                        {fullname}
                    </span>
                    <p className="text-gray-500 text-sm">
                        2 hours ago
                    </p>
                </div>
            </div>
            <div className="flex pl-2 space-x-6">
                <AiOutlineHeart size={30} />
                <CiShare1 size={30} />
            </div>
            </div>
            <Empty
                description={
                    <span>
                        No comments
                    </span>}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
            <div className="flex w-full p-2 gap-3 items-center">
                <Avatar avatar={myAvatar} size={34} />
                <div className="border grow rounded-full relative">
                    <form>
                        <input
                            className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full" placeholder="Leave a comment" />
                    </form>
                    <button className="absolute top-3 right-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comments;
import { Modal } from 'antd';
import React from 'react';
import Comments from './Coments/Comments';

const ModalPhotoAvatar = ({ open, onClose, avatar, myAvatar, fullname }: any) => {
    return (
        <Modal
            open={open}
            centered
            closable={false}
            footer={null}
            onCancel={onClose}
            width={"65%"}
        >
            <div className="flex">
                <img alt="example" style={{ width: "70%" }} src={avatar} />
                <Comments myAvatar={myAvatar} avatar={avatar} fullname={fullname} />
            </div>
        </Modal>
    );
};

export default ModalPhotoAvatar;
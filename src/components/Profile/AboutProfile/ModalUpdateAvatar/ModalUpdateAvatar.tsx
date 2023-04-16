import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Modal, Button } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';

const { Dragger } = Upload;

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const ModalUpdateAvatar = ({ open, uploadHandler, onCancel, onOk }: any) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
  });

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      previewVisible: true,
      previewImage: file.url || file.preview,
    });
  };

  const props: UploadProps = {
    customRequest: uploadHandler,
    listType: "picture",
    multiple: true,
    maxCount: 1,
    onPreview: handlePreview,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log("Not uploading ", info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <Modal
      title="Upload photo profile"
      centered
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" onClick={onOk}>
          Save
        </Button>]}
    >
      {!state.previewVisible ? <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger> : <img alt="example" style={{ width: "100%" }} src={state.previewImage} />}
    </Modal>
  );
};

export default ModalUpdateAvatar;
// UploadFile.jsx
import React from 'react';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const UploadFile = ({ onFileUpload }) => {

    const fileList = [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'done',
        },
    ];
  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} archivo subido exitosamente`);
        onFileUpload(info.file); // Pass the uploaded file to the parent component
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} error al subir el archivo.`);
      }
    },
    showUploadList: {
        showDownloadIcon: true,
        downloadIcon: <DownloadOutlined />,
        showRemoveIcon: false,
    },
  };

  return (
    <Upload {...props} listType='picture' defaultFileList={[...fileList]} className='uploaded-files'>
      <Button icon={<UploadOutlined />}>Click para subir</Button>
    </Upload>
  );
};

export default UploadFile;

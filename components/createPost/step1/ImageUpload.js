import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { uploadImage } from '../../../actions/uploadImage';

const Images = () => {
  const dispatch = useDispatch();
  const imgList = useSelector(state => state.imgUpload.imgList);

  const handleUpload = file => {
    dispatch(uploadImage(imgList.length, file));
  };

  return (
    <div>
      <Button
        type="dashed"
        style={{
          width: '100%',
          height: '8rem'
        }}
      >
        <label style={{ width: '100%', height: '100%', color: '#00000090' }}>
          <FileImageOutlined style={{ fontSize: '3rem' }} />
          <br />
          Click To Upload Image
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={event => handleUpload(event.target.files[0])}
            style={{
              position: 'absolute',
              top: '0',
              left: ' 0',
              opacity: '0',
              width: '100%',
              height: '100%',
              cursor: 'pointer'
            }}
          />
        </label>
      </Button>
    </div>
  );
};

export default Images;

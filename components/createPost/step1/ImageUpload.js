import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

import { uploadImage } from '../../../actions/createpost';

const Images = () => {
  const dispatch = useDispatch();
  const imgKey = useSelector(state => state.imgUpload.imgKey);

  const handleUpload = file => {
    dispatch(uploadImage(imgKey, file));
  };

  return (
    <div>
      <Button
        type="dashed"
        style={{
          width: '100%',
          height: '8rem',
          backgroundColor: '#4878a91f'
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Progress, Modal, Tooltip } from 'antd';
import {
  DeleteOutlined,
  StarOutlined,
  StarFilled,
  LoadingOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { DELETE_IMG_PREVIEW, SET_DEFAULT_IMAGE } from '../../../actions/types';

const { confirm } = Modal;

const PreviewContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  width: 100%;
  height: 5rem;
  background-color: ${props => (props.primary ? '#f3f7f9' : null)};
`;

const ImgContainer = styled.div`
  position: relative;
  height: 5rem;
  line-height: 5rem;
  width: 5rem;
  overflow: hidden;
  background-color: #f3f7f9;
  text-align: center; /* center horizontally */
`;

const ImgBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  filter: opacity(0.2);
  -webkit-filter: opacity(0.2);
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  opacity: ${props => (props.isLoading ? 0 : 1)};
  vertical-align: middle; /* center vertically */
  position: relative;
`;

const Status = styled.div`
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  flex: 1;
  div {
    font-size: 1.25rem;
    vertical-align: middle; /* center vertically */
  }
`;

const Options = styled.div`
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const Delete = styled.span`
  color: ${({ theme }) => theme.secondaryRed};
`;

const ImagePreview = () => {
  const dispatch = useDispatch();
  const imgList = useSelector(state => state.imgUpload.imgList);

  function handleDelete(imgKey) {
    dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
  }

  function showDelete(imgKey) {
    confirm({
      title: 'Are you sure you want to delete this image?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        handleDelete(imgKey);
      }
    });
  }

  function handleSetDefaultImage(imgKey) {
    dispatch({ type: SET_DEFAULT_IMAGE, payload: imgKey });
  }

  return imgList.map((item, index) => {
    return (
      <PreviewContainer key={index} primary={index === 0 ? true : false}>
        <Options>
          <Star>
            {index === 0 ? (
              <StarFilled />
            ) : (
              <Tooltip placement="right" title="Set Default Image">
                <StarOutlined
                  onClick={() => handleSetDefaultImage(item.imgKey)}
                />
              </Tooltip>
            )}
          </Star>
          <br />
          <Delete>
            {item.isLoading && !item.error && (
              <DeleteOutlined style={{ color: '#5858581f' }} />
            )}
            {!item.isLoading && !item.error && (
              <Tooltip placement="right" title="Delete Image">
                <DeleteOutlined onClick={() => showDelete(item.imgKey)} />
              </Tooltip>
            )}
            {item.error && (
              <Tooltip placement="right" title="Delete Image">
                <DeleteOutlined onClick={() => showDelete(item.imgKey)} />
              </Tooltip>
            )}
          </Delete>
        </Options>
        <ImgContainer>
          <ImgBackground
            style={{ backgroundImage: 'url(' + item.objectUrl + ')' }}
          />
          <Img src={item.objectUrl} isLoading={item.isLoading} />
        </ImgContainer>
        <Status>
          {item.isLoading && !item.error && (
            <div>
              <LoadingOutlined /> Loading...
            </div>
          )}
          {!item.isLoading && !item.error && (
            <div>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Complete
            </div>
          )}
          {item.error && (
            <div>
              <CloseCircleOutlined style={{ color: '#ee7a7a' }} /> Upload Error
            </div>
          )}
          <div style={{ maxWidth: '90%' }}>
            <Progress
              status="normal"
              strokeColor="#4878a9"
              trailColor="#4878a91f"
              percent={item.percentage}
            />
          </div>
        </Status>
      </PreviewContainer>
    );
  });
};

export default ImagePreview;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Progress, Tooltip } from "antd";
import {
  DeleteOutlined,
  StarOutlined,
  StarFilled,
  LoadingOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { DELETE_IMG_PREVIEW, SET_DEFAULT_IMAGE } from "../../../actions/types";
import {
  PreviewContainer,
  ImgContainer,
  ImgBackground,
  Img,
  Status,
  Options,
  Star,
  Delete,
} from "./style";

const { confirm } = Modal;

const ImagePreview = () => {
  const dispatch = useDispatch();
  const imgList = useSelector((state) => state.imgUpload.imgList);

  function handleDelete(imgKey) {
    dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
  }

  function showDelete(imgKey) {
    confirm({
      title: "Are you sure you want to delete this image?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        handleDelete(imgKey);
      },
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
              <DeleteOutlined style={{ color: "#5858581f" }} />
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
            style={{
              backgroundImage: item.objectUrl
                ? "url(" + item.objectUrl + ")"
                : item.thumbnailUrl,
            }}
          />
          <Img
            src={item.objectUrl ? item.objectUrl : item.thumbnailUrl}
            isLoading={item.isLoading}
          />
        </ImgContainer>
        <Status>
          {item.isLoading && !item.error && (
            <div>
              <LoadingOutlined /> Loading...
            </div>
          )}
          {!item.isLoading && !item.error && (
            <div>
              <CheckCircleOutlined style={{ color: "#52c41a" }} /> Complete
            </div>
          )}
          {item.error && (
            <div>
              <CloseCircleOutlined style={{ color: "#ee7a7a" }} /> Upload Error
            </div>
          )}
          <div style={{ maxWidth: "90%" }}>
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

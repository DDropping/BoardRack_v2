import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

import { uploadImage } from "../../../actions/uploadImage";

const Images = () => {
  const dispatch = useDispatch();
  const imgList = useSelector((state) => state.imgUpload.imgList);

  const handleUpload = (file) => {
    dispatch(uploadImage(imgList.length, file));
  };

  return (
    <div>
      <Button
        type="dashed"
        className="input-button"
        style={{
          width: "100%",
          height: "8rem",
          backgroundColor: "#bbb3",
        }}
      >
        <label style={{ width: "100%", height: "100%" }}>
          <FileImageOutlined style={{ fontSize: "3rem" }} />
          <br />
          <span>Click To Upload Image</span>
          {imgList.length > 0 && <span> ({imgList.length} / 8)</span>}
          {imgList.length < 8 && (
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={(event) => handleUpload(event.target.files[0])}
              style={{
                position: "absolute",
                top: "0",
                left: " 0",
                opacity: "0",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          )}
        </label>
      </Button>
    </div>
  );
};

export default Images;

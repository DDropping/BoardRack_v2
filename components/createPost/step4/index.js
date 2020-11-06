import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Divider } from "antd";

import PostPage from "../../postPage";
import NavButtons from "../NavButtons";

const PreviewWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.primaryBlue};
`;

const H2 = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.secondaryBlue};
`;

const index = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useSelector((state) => state.currentLocation.location);
  const images = useSelector((state) => state.imgUpload.imgList);
  const {
    title,
    price,
    boardType,
    condition,
    description,
    tail,
    finSystem,
    finConfiguration,
    lengthFt,
    lengthIn,
    width,
    depth,
    volume,
    construction,
    glassing,
    contour,
    waveSize,
    drive,
    paddlePower,
    movability,
    shaper,
    model,
    phone,
    email,
  } = useSelector((state) => state.createPostForm);

  const postFields = {};
  postFields.user = user;
  postFields.date = Date.now();
  if (title) postFields.title = title;
  if (price) postFields.price = price;
  if (boardType) postFields.boardType = boardType;
  if (condition) postFields.condition = condition;
  if (description) postFields.description = description;
  if (tail) postFields.tail = tail;
  if (finSystem) postFields.finSystem = finSystem;
  if (finConfiguration) postFields.finConfiguration = finConfiguration;
  if (construction) postFields.construction = construction;
  if (glassing) postFields.glassing = glassing;
  if (contour) postFields.contour = contour;
  if (waveSize) postFields.waveSize = waveSize;
  if (drive) postFields.drive = drive;
  if (paddlePower) postFields.paddlePower = paddlePower;
  if (movability) postFields.movability = movability;
  if (shaper) postFields.shaper = shaper;
  if (model) postFields.model = model;

  let length = 0;
  if (lengthFt) postFields.lengthFt = lengthFt;
  if (lengthIn) postFields.lengthIn = lengthIn;
  if (lengthFt) length += 12 * lengthFt;
  if (lengthIn) length += eval(lengthIn.trim().replace(" ", "+"));
  if (lengthFt || lengthIn) postFields.lengthValue = length;
  if (width) postFields.width = width;
  if (width) postFields.widthValue = eval(width.trim().replace(" ", "+"));
  if (depth) postFields.depth = depth;
  if (depth) postFields.depthValue = eval(depth.trim().replace(" ", "+"));
  if (volume) postFields.volume = volume;
  if (volume) postFields.volumeValue = eval(volume.trim().replace(" ", "+"));

  //list of image urls
  if (images)
    postFields.images = images.map((item, index) => {
      return {
        _id: index,
        standard: item.standardUrl,
        thumbnail: item.thumbnailUrl,
      };
    });

  //build location object
  postFields.location = {};
  if (location.lat) postFields.location.lat = location.lat;
  if (location.lng) postFields.location.lng = location.lng;
  if (location.country) postFields.location.country = location.country;
  if (location.state) postFields.location.state = location.state;
  if (location.city) postFields.location.city = location.city;
  if (location.postalCode) postFields.location.postalCode = location.postalCode;
  if (location.locationImage)
    postFields.location.locationImage = location.locationImage;

  //build contact object
  postFields.contactMethods = {};
  postFields.contactMethods.message = true;
  if (phone) postFields.contactMethods.phone = phone;
  if (email) postFields.contactMethods.email = email;

  postFields._id = "temp_id";
  postFields.favorites = [];
  postFields.viewCount = 0;

  return (
    <div>
      <Divider>
        <H2>Post Preview</H2>
      </Divider>
      <PreviewWrapper>
        <PostPage quickData={postFields} isPreview={true} />
      </PreviewWrapper>
    </div>
  );
};

export default index;

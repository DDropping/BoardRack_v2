import React from 'react';
import { Row, Col, Divider } from 'antd';
import styled from 'styled-components';

import Details from './Details';
import Images from './Images';

const H2 = styled.h2`
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
`;

const Step1 = ({ post, handlePostChange }) => {
  return (
    <div>
      <Row gutter={8}>
        <Col xs={24} sm={12} md={12} className="wrapperCreatePostItem">
          <Divider>
            <H2>Basic Details</H2>
          </Divider>
          <Details post={post} handlePostChange={handlePostChange} />
        </Col>
        <Col xs={24} sm={12} md={12} className="wrapperCreatePostItem">
          <Divider>
            <H2>Add Photos</H2>
            <Images />
          </Divider>
        </Col>
      </Row>
    </div>
  );
};

export default Step1;

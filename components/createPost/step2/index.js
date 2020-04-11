import React from 'react';
import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';

import Dimensions from './Dimensions';

const H2 = styled.h2`
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
`;

const SectionContainer = styled.div`
  margin: 1rem;
`;

const Step2 = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Dimensions</H2>
            </Divider>
            <Dimensions />
          </SectionContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Fins</H2>
            </Divider>
          </SectionContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Construction</H2>
            </Divider>
          </SectionContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Opinion</H2>
            </Divider>
          </SectionContainer>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;

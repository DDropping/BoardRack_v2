import React from 'react';
import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';

import Dimensions from './Dimensions';
import ModelAndFins from './ModelAndFins';
import Construction from './Construction';
import Opinion from './Opinion';

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
              <H2>Model & Fins</H2>
            </Divider>
            <ModelAndFins />
          </SectionContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Dimensions</H2>
            </Divider>
            <Dimensions />
          </SectionContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Construction</H2>
            </Divider>
            <Construction />
          </SectionContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <SectionContainer>
            <Divider>
              <H2>Opinion</H2>
            </Divider>
            <Opinion />
          </SectionContainer>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;

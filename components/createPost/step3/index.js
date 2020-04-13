import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Row, Col, Divider } from 'antd';

import GetLocationButton from './GetLocationButton';
import GetLocationForm from './GetLocationForm';
import Map from './Map';

const H2 = styled.h2`
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
`;

const LocationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0 1rem;
  vertical-align: middle;
`;

const Disclaimer = styled.span`
  color: ${({ theme }) => theme.primaryDarkGrey};
  font-style: italic;
`;

const Step3 = () => {
  return (
    <div>
      <Row>
        <Divider>
          <H2>Location</H2>
        </Divider>
        <Col xs={24} sm={12} md={12}>
          <LocationContainer>
            <GetLocationButton />
            <Divider>OR</Divider>

            <GetLocationForm />

            <Disclaimer>*Your address will not be public</Disclaimer>
          </LocationContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Map />
        </Col>
      </Row>
    </div>
  );
};

export default Step3;

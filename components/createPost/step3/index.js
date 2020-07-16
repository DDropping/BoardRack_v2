import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col, Divider } from "antd";

import GetLocationButton from "./GetLocationButton";
import GetLocationForm from "./GetLocationForm";
import Map from "./Map";
import ValidationErrors from "../ValidationErrors";

const H2 = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.secondaryBlue};
`;

const LocationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0 1rem;

  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  text-align: center;
  padding-top: 1rem;
  margin-top: auto;
  .location {
    font-style: italic;
    color: ${({ theme }) => theme.secondaryBlue};
  }
`;

const Disclaimer = styled.span`
  color: ${({ theme }) => theme.primaryDarkGrey};
  font-style: italic;
`;

const Step3 = () => {
  const isLocated = useSelector((state) => state.currentLocation.isLocated);
  const isLocatedWithIp = useSelector(
    (state) => state.currentLocation.isLocatedWithIp
  );
  const location = useSelector((state) => state.currentLocation.location);

  return (
    <div>
      <Row>
        <Divider>
          <H2>Location</H2>
        </Divider>
        <Col xs={24} sm={12} md={12}>
          <LocationContainer>
            <GetLocationButton />
            <Divider>or</Divider>
            <br />
            {/* br used to fix spacing issue, reason for issue unknown */}
            <GetLocationForm />

            <Disclaimer>*Your address will not be public</Disclaimer>
            <H3>
              <span style={{ color: "red" }}>* </span>
              <span>Location:</span>{" "}
              <span className="location">
                {isLocated && !isLocatedWithIp
                  ? location.city +
                    ", " +
                    location.state +
                    " " +
                    location.postalCode
                  : "Not Selected"}
              </span>
            </H3>
          </LocationContainer>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Map />
        </Col>
      </Row>
      <Row>
        <ValidationErrors />
      </Row>
    </div>
  );
};

export default Step3;

import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import { CountersContainer } from "./style";

const index = ({ date, views, favorites }) => {
  const [time, setTime] = useState("-");
  useEffect(() => {
    let timePostedAgo = new Date() - new Date(date);

    if (timePostedAgo > 8.64e7)
      setTime(Math.floor(timePostedAgo / 8.64e7) + " day(s)");
    else if (timePostedAgo > 3.6e6)
      setTime(Math.floor(timePostedAgo / 3.6e6) + " hour(s)");
    else if (timePostedAgo > 60e3)
      setTime(Math.floor(timePostedAgo / 60e3) + " minute(s)");
    else setTime("1 minute");
  }, []);

  return (
    <CountersContainer>
      <Row>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Listed</div>
          <strong>{time}</strong>
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Views</div>
          <strong>{views}</strong>
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Favorites</div>
          <strong>{favorites.length}</strong>
        </Col>
      </Row>
    </CountersContainer>
  );
};

export default index;

import React, { useState } from "react";
import { Col, Input, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { Container, Title } from "./style";

const MyAccount = ({ user, userData, setUserData }) => {
  const [isEditPassword, toggleEditPassword] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>My Account</Title>
      </Row>

      <Row gutter={[0, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Username:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Input
            value={userData.username}
            placeholder={user ? user.username : "username"}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </Col>
      </Row>

      <Row gutter={[0, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Email:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Input
            value={userData.email}
            placeholder={user ? user.email : "email"}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Col>
      </Row>

      {!isEditPassword && (
        <Row gutter={[0, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            **********
            <EditOutlined onClick={() => toggleEditPassword(true)} />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[0, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            Current Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              value={userData.password}
              placeholder="**********"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[0, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            New Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              value={userData.password}
              placeholder="**********"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[0, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            Confirm New Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              value={userData.password}
              placeholder="**********"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MyAccount;

import React, { useState } from "react";
import { Col, Input, Row } from "antd";
import {
  EditOutlined,
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";

import { Container, Title, Text } from "./style";
import Avatar from "../../avatar";

const MyAccount = ({ user, userData, setUserData }) => {
  const [isEditPassword, toggleEditPassword] = useState(false);
  const [isEditEmail, toggleEditEmail] = useState(false);

  const handleAvatarPicker = () => {};

  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>My Account</Title>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={8} sm={10} md={8} lg={6}>
          Profile Image:
        </Col>
        <Col xs={12} sm={10} md={8} lg={6}>
          {user && (
            <Avatar
              userId={user._id}
              username={user.username}
              size={150}
              isEditable={true}
              onClick={handleAvatarPicker}
            />
          )}
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={8} sm={10} md={8} lg={6}>
          Username:
        </Col>
        <Col xs={12} sm={10} md={8} lg={6}>
          <Text>{user ? user.username : "loading..."}</Text>
        </Col>
      </Row>

      {!isEditEmail && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={8} sm={10} md={8} lg={6}>
            Email:
          </Col>
          <Col xs={12} sm={10} md={8} lg={6}>
            <Text>{user ? user.email : "loading..."}</Text>
            <EditOutlined onClick={() => toggleEditEmail(true)} />
          </Col>
        </Row>
      )}

      {isEditEmail && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={8} sm={10} md={8} lg={6}>
            Email:
          </Col>
          <Col xs={12} sm={10} md={8} lg={6}>
            <Input
              value={userData.email}
              placeholder={user ? user.email : "email"}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Col>
        </Row>
      )}

      {!isEditPassword && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={8} sm={10} md={8} lg={6}>
            Password:
          </Col>
          <Col xs={12} sm={10} md={8} lg={6}>
            <Text>**********</Text>
            <EditOutlined onClick={() => toggleEditPassword(true)} />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            Current Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            New Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              type="password"
              suffix={
                userData.newPassword.length >= 6 ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <ExclamationCircleTwoTone twoToneColor="#fcbe03" />
                )
              }
              placeholder="At least 6 characters"
              value={userData.newPassword}
              onChange={(e) =>
                setUserData({ ...userData, newPassword: e.target.value })
              }
            />
          </Col>
        </Row>
      )}

      {isEditPassword && (
        <Row gutter={[8, 8]}>
          <Col xs={2} sm={2} md={4} lg={6} />
          <Col xs={10} sm={10} md={8} lg={6}>
            Confirm New Password:
          </Col>
          <Col xs={10} sm={10} md={8} lg={6}>
            <Input
              type="password"
              placeholder="At least 6 characters"
              value={userData.newPasswordConfirm}
              suffix={
                userData.newPassword === userData.newPasswordConfirm &&
                userData.newPassword.length > 5 ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <ExclamationCircleTwoTone twoToneColor="#fcbe03" />
                )
              }
              onChange={(e) =>
                setUserData({ ...userData, newPasswordConfirm: e.target.value })
              }
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MyAccount;

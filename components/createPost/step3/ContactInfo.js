import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Input, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { SET_INPUT } from "../../../actions/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactInfo = () => {
  const dispatch = useDispatch();
  const { email, isEmailEnabled, phone, isPhoneEnabled } = useSelector(
    (state) => state.createPostForm
  );

  //auto enable email if valid
  useEffect(() => {
    if (/\S+@\S+\.\S+/.test(email)) handleInputChange("isEmailEnabled", true);
    else handleInputChange("isEmailEnabled", false);
  }, [email]);

  //auto enable phone if valid
  useEffect(() => {
    if (phone) handleInputChange("isPhoneEnabled", true);
    else handleInputChange("isPhoneEnabled", false);
  }, [phone]);

  //update input to store
  function handleInputChange(name, value) {
    const payload = { name: name, value: value };
    dispatch({ type: SET_INPUT, payload: payload });
  }

  return (
    <Container>
      <div>
        <InputContainer>
          <Checkbox checked={true} disabled>
            Boardrack Messages
          </Checkbox>
          <Tooltip
            placement="top"
            title={
              "Allow users to contact you via boardrack messages (This option is always enabled)"
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        </InputContainer>

        <br />

        <InputContainer>
          <Checkbox
            checked={isEmailEnabled ? isEmailEnabled : false}
            style={{ width: "5rem" }}
            onChange={() =>
              handleInputChange(
                "isEmailEnabled",
                isEmailEnabled ? !isEmailEnabled : true
              )
            }
          >
            Email
          </Checkbox>
          <div>
            <Input
              placeholder="myEmail@email.com"
              prefix={<MailOutlined />}
              value={email}
              onChange={(event) =>
                handleInputChange("email", event.target.value)
              }
            />
          </div>
        </InputContainer>

        <br />

        <InputContainer>
          <Checkbox
            checked={isPhoneEnabled ? isPhoneEnabled : false}
            style={{ width: "5rem" }}
            onChange={() =>
              handleInputChange(
                "isPhoneEnabled",
                isPhoneEnabled ? !isPhoneEnabled : true
              )
            }
          >
            Phone
          </Checkbox>
          <div>
            <Input
              placeholder="(555) 555-5555"
              prefix={<PhoneOutlined />}
              value={phone}
              onChange={(event) =>
                handleInputChange("phone", event.target.value)
              }
            />
          </div>
        </InputContainer>
      </div>
    </Container>
  );
};

export default ContactInfo;

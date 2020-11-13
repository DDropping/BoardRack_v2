import React, { useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { TOGGLE_LOGIN } from "../../actions/types";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const index = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.overlays.isLogin);
  const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  return (
    <Modal
      title={isForgotPasswordVisible ? "Forgot Password" : "Login"}
      visible={isVisible}
      onOk={() => dispatch({ type: TOGGLE_LOGIN, payload: false })}
      onCancel={() => dispatch({ type: TOGGLE_LOGIN, payload: false })}
      footer={null}
      zIndex={1100}
    >
      {isForgotPasswordVisible ? (
        <ForgotPasswordForm
          setForgotPasswordVisible={setForgotPasswordVisible}
        />
      ) : (
        <LoginForm setForgotPasswordVisible={setForgotPasswordVisible} />
      )}
    </Modal>
  );
};

export default index;

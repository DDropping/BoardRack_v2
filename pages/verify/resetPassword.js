import React from "react";
import Head from "next/head";

import ResetPasswordForm from "../../components/confirmations/resetPasswordForm";

const resetPassword = () => {
  return (
    <div>
      <Head>
        <title>BoardRack | Reset Password</title>
      </Head>
      <ResetPasswordForm />
    </div>
  );
};

export default resetPassword;

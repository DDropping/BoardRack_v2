import React from "react";
import Head from "next/head";

import RecoverAccountForm from "../../components/confirmations/recoverAccountForm";

const resetPassword = () => {
  return (
    <div>
      <Head>
        <title>BoardRack | Recover Account</title>
      </Head>
      <RecoverAccountForm />
    </div>
  );
};

export default resetPassword;

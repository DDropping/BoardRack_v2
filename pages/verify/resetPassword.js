import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import ResetPasswordForm from "../../components/confirmations/resetPasswordForm";

const resetPassword = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(null);

  //   useEffect(() => {
  //     try {
  //       const updateUser = async () => {
  //         try {
  //           const url = `${baseUrl}/api/verification/authenticate/verifyEmail?token=${router.query.token}`;
  //           await axios.patch(url);
  //           setSuccess(true);
  //         } catch (err) {
  //           setSuccess(false);
  //         }
  //       };
  //       setLoading(true);
  //       updateUser();
  //     } catch (err) {
  //       setSuccess(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, []);

  return (
    <div>
      <Head>
        <title>BoardRack | Reset Password</title>
      </Head>
      <ResetPasswordForm isLoading={isLoading} isSuccess={isSuccess} />
    </div>
  );
};

export default resetPassword;

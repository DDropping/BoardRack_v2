import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import EmailConfirmation from "../../components/confirmations/emailConfirm";

const email = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(null);

  useEffect(() => {
    try {
      const updateUser = async () => {
        try {
          const url = `${baseUrl}/api/verification/authenticate/verifyEmail?token=${router.query.token}`;
          await axios.patch(url);
          setSuccess(true);
        } catch (err) {
          setSuccess(false);
        }
      };
      setLoading(true);
      updateUser();
    } catch (err) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>BoardRack | Verify Email</title>
      </Head>
      <EmailConfirmation isLoading={isLoading} isSuccess={isSuccess} />
    </div>
  );
};

export default email;

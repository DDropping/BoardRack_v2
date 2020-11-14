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
          //set headers for request
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          //stringify the form items
          const data = {
            token: router.query.token,
          };
          const body = JSON.stringify(data);

          //send request
          const url = `${baseUrl}/api/verification/authenticate/verifyEmail`;
          await axios.patch(url, body, config);
          setSuccess(true);
          setTimeout(() => {
            router.push("/");
          }, 3000);
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

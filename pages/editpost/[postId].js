import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

import { EDIT_POST_INSERT_DATA } from "../../actions/types";
import baseUrl from "../../utils/baseUrl";
import Step3 from "../../components/createPost/step3";
import Step2 from "../../components/createPost/step2";
import Step1 from "../../components/createPost/step1";
import PostSteps from "../../components/createPost/PostSteps";
import NavButtons from "../../components/createPost/NavButtons";

const EditPost = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();
  let user = useSelector((state) => state.auth.user);

  const handleStepChange = (current) => {
    setStep(current);
  };

  useEffect(() => {
    if (!router.query.postId) {
      router.push("/");
    }
    if (router.query.postId && user) {
      const getPostData = async () => {
        const url = `${baseUrl}/api/posts/postdetails/${router.query.postId}`;
        let res = await axios.get(url);
        console.log("post: ", res.data);
        if (res.data.user._id === user._id) {
          dispatch({ type: EDIT_POST_INSERT_DATA, payload: res.data });
        }
      };
      getPostData();
    }
  }, [user, router.query.postId]);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Head>
        <title>BoardRack | Create Post</title>
      </Head>
      <PostSteps step={step} handleStepChange={handleStepChange} />
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
      {step === 2 && <Step3 />}
      <NavButtons step={step} handleStepChange={handleStepChange} />
    </div>
  );
};

export default EditPost;

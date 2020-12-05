import React from "react";
import Image from "next/image";

const PostNoLongerExists = () => {
  return (
    <>
      <div style={{ marginTop: "25px" }} />
      <Image
        src='/images/404NoLongerExists.jpg'
        alt='404 page not found'
        layout='responsive'
        width={1000}
        height={520}
      />
    </>
  );
};

export default PostNoLongerExists;

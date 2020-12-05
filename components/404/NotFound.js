import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div style={{ marginTop: "25px" }} />
      <Image
        src='/images/404NotFound.jpg'
        alt='404 page not found'
        layout='responsive'
        width={1000}
        height={520}
        style={{ marginTop: "25px" }}
      />
    </>
  );
};

export default NotFound;

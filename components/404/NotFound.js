import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div style={{ marginTop: "25px" }} />
      <Image
        src='/images/404NotFound.jpg'
        alt='404 page not found'
        width={1000}
        height={520}
        style={{ width: "100%", height: "auto", marginTop: "25px" }}
      />
    </>
  );
};

export default NotFound;

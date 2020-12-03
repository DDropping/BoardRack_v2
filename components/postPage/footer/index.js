import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div style={{ width: "100%" }}>
      <Image
        src='/images/br_post_page_footer.png'
        alt='End of Page Footer'
        layout='responsive'
        width={2352}
        height={724}
      />
    </div>
  );
};

export default index;

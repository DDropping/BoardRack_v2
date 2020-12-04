import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  return (
    <div style={{ height: "100%", maxWidth: "1000px", margin: "0 auto" }}>
      <Head>
        <title>BoardRack | 404</title>
        <meta httpEquiv='Content-type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Page Not Found: 404' />
      </Head>
      <img
        alt='404 page not found'
        src={"/images/404NotFound.jpg"}
        style={{ marginTop: "25px" }}
      />
      <Image
        src='/images/404NotFound.jpg'
        alt='404 page not found'
        layout='responsive'
        width={1000}
        height={545}
      />
    </div>
  );
}

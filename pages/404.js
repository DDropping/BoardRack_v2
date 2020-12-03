import Image from "next/image";
export default function Custom404() {
  return (
    <div style={{ height: "100%", maxWidth: "1000px", margin: "0 auto" }}>
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

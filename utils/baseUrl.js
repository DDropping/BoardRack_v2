const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://board-rack-v2-ipwaawakr.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;

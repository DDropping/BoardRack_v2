import React from "react";

const index = ({ map, lat, lng }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://maps.google.com/?q=${lat},${lng}&z=8`}
    >
      <img
        style={{ maxWidth: "100%", marginTop: "1rem" }}
        alt="location map"
        src={map}
      />
    </a>
  );
};

export default index;

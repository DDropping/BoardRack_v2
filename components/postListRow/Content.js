import React from "react";

import { ContentContainer, ContentTitle } from "./style";

const Content = ({ data }) => {
  const length =
    data.lengthFt && data.lengthIn
      ? data.lengthFt + "'" + data.lengthIn + '" '
      : "-- ";
  const width = data.width ? " " + data.width + '" ' : " -- ";
  const depth = data.depth ? " " + data.depth + '" ' : " --";
  const volume = data.volume ? data.volume + "L" : "--";
  const shaper = data.shaper ? data.shaper : "--";
  const model = data.model ? data.model : "--";

  return (
    <ContentContainer>
      <ContentTitle>{data.title}</ContentTitle>
      <div>
        {"Shaper: "}
        <strong>
          <i>{shaper}</i>
        </strong>
      </div>
      <div>
        {"Model: "}
        <strong>
          <i>{model}</i>
        </strong>
      </div>
      <div>
        {"Dimensions: "}
        <strong>
          <i>{length}</i>
        </strong>
        x
        <strong>
          <i>{width}</i>
        </strong>
        x
        <strong>
          <i>{depth}</i>
        </strong>
      </div>
      <div>
        {"Volume: "}
        <strong>
          <i>{volume}</i>
        </strong>
      </div>
    </ContentContainer>
  );
};

export default Content;

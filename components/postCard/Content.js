import React from 'react';

import { ContentContainer, ContentTitle } from './style';

const Content = ({ data }) => {
  console.log(data);

  const dims =
    data.lengthFt && data.lengthIn && data.width && data.depth
      ? data.lengthFt +
        "'" +
        data.lengthIn +
        '" x ' +
        data.width +
        '" x ' +
        data.depth +
        '"'
      : null;
  return (
    <ContentContainer>
      <ContentTitle>{data.title}</ContentTitle>
      {dims !== null && dims}
    </ContentContainer>
  );
};

export default Content;

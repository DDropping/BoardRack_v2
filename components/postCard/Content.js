import React from 'react';

import { ContentContainer, ContentTitle } from './style';

const Content = ({ data }) => {
  const length =
    data.lengthFt && data.lengthIn
      ? data.lengthFt + "'" + data.lengthIn + '" '
      : '?? ';
  const width = data.width ? ' ' + data.width + '" ' : ' ?? ';
  const depth = data.depth ? ' ' + data.depth + '" ' : ' ??';
  const volume = data.volume ? data.volume + 'L' : null;

  return (
    <ContentContainer>
      <ContentTitle>{data.title}</ContentTitle>
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
      <span style={{ float: 'right' }}>
        <strong>
          <i>{volume}</i>
        </strong>
      </span>
    </ContentContainer>
  );
};

export default Content;

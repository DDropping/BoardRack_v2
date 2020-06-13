import React from 'react';
import styled from 'styled-components';
import { EyeOutlined } from '@ant-design/icons';

const Views = (viewCount) => {
  const ViewsContainer = styled.div`
    display: inline-block;
    margin-right: 2px;
    font-size: 18px;
    color: ${({ theme }) => theme.primaryBlue};
    position: relative;
  `;

  return (
    <ViewsContainer>
      {viewCount.viewCount} <EyeOutlined style={{ marginRight: '10px' }} />
    </ViewsContainer>
  );
};

export default Views;

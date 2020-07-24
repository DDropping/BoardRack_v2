import React from 'react';
import styled from 'styled-components';
import { EyeOutlined } from '@ant-design/icons';

const ViewsContainer = styled.div`
  display: inline-block;
  margin-right: 2px;
  font-size: 18px;
  color: ${({ theme }) => theme.primaryBlue};
  position: relative;
`;

const Views = ({ count }) => {
  return (
    <ViewsContainer>
      {count}
      <EyeOutlined style={{ marginRight: '10px' }} />
    </ViewsContainer>
  );
};

export default Views;

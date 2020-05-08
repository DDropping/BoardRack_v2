import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.primaryRed};
  padding: 1rem 1rem 0 1rem;
`;

const ValidationErrors = () => {
  const location = useSelector(state => state.currentLocation.location);
  const formData = useSelector(state => state.createPostForm);
  return (
    <Container>
      {!formData.title && formData.title !== '' && <div>*Title Required</div>}
      {isNaN(formData.price) && <div>*Price Required</div>}
      {(!location.lat || !location.lng) && <div>*Location Required</div>}
    </Container>
  );
};

export default ValidationErrors;

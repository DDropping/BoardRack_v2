import React from 'react';

const index = ({ quickData }) => {
  console.log('quickData:', quickData);
  return (
    <div>
      {quickData ? quickData.title : 'post page'}
      {quickData ? quickData.price : 'post page'}
    </div>
  );
};

export default index;

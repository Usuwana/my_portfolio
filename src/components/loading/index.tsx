import React from 'react';
import ReactLoading from 'react-loading';
import './/styles.css';

export const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="bars" color="white" height={100} width={100} />
    </div>
  );
}



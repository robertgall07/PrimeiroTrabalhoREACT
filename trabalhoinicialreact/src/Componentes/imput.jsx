import React from 'react';

export const Imput = ({ handleClick, value }) => {
  return (
    <input type="text" onChange={handleClick } value={value} />
  );
};


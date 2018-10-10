import React from 'react';

const Input = ({
  label, type, value, changeHandler
}) => (
  <label>{label}
    <input
      type={type}
      value={value}
      onChange={changeHandler}
    />
  </label>
)

export {
  Input,
}
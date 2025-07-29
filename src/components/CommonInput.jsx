import React from 'react';

const CommonInput = ({
    type = "text",
    placeHolder = "enter value",
    value = "",
    onChange
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      style={{
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px"
      }}
    />
  );
};

export default CommonInput;

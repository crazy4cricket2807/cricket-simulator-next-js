import React, { useState } from "react";

const FormInputTypeBasic = ({
  label,
  placeholder,
  handleInputChange,
  ...props
}) => {
  return (
    <div className="my-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-left"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e, placeholder)}
        {...props}
      />
    </div>
  );
};

export default FormInputTypeBasic;

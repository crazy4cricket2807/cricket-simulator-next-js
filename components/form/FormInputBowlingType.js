import React from "react";

const FormInputBowlingType = ({ handleInputChange }) => {
  const bowlingStyles = [
    "right-arm fast",
    "right-arm medium",
    "right-arm offbreak",
    "right-arm legbreak",
    "left-arm fast",
    "left-arm medium",
    "left-arm offbreak",
    "left-arm legbreak",
  ];
  return (
    <div className="my-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-left"
        htmlFor={"bowlStyle"}
      >
        Bowling Style
      </label>
      <div className="flex justify-around">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          defaultValue="none"
          onChange={(e) => handleInputChange(e, "bowlStyle")}
        >
          <option selected>none</option>
          {bowlingStyles.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormInputBowlingType;

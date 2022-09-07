import React, { useState } from "react";
import FormInputBattingType from "../../components/form/FormInputBattingType";
import FormInputTypeBasic from "../../components/form/FormInputTypeBasic";

const Createplayer = () => {
  const [formData, setFormData] = useState({});
  const handleInputChange = (e, el) => {
    setFormData({ ...formData, [el]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
    <>
      <title>Create Player</title>
      <div className="text-center bg-gray-100 h-screen">
        <div className="py-8">
          <form
            className="bg-white shadow-md rounded px-8 py-8 mb-4 w-9/12 mx-auto"
            onSubmit={handleSubmit}
          >
            <FormInputTypeBasic
              label="playerInitials"
              placeholder="playerInitials"
              handleInputChange={handleInputChange}
              required
            />
            <FormInputTypeBasic
              label="displayName"
              placeholder="displayName"
              handleInputChange={handleInputChange}
              required
            />
            <FormInputBattingType handleInputChange={handleInputChange} />
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
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </div>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createplayer;

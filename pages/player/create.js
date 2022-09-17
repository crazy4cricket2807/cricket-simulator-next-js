import React, { useState } from "react";
import FormInputBattingType from "../../components/form/FormInputBattingType";
import FormInputBowlingType from "../../components/form/FormInputBowlingType";
import FormInputTypeBasic from "../../components/form/FormInputTypeBasic";
import axios from "axios";

const Createplayer = () => {
  const [formData, setFormData] = useState({
    playerInitials: "",
    displayName: "",
    batRunsTotal: 0,
    batStyle: "",
    bowlStyle: "",
    batRunsTotal: 0,
    batBallsTotal: 0,
    bowlRunsTotal: 0,
    bowlBallsTotal: 0,
    batOutsTotal: 0,
    bowlOutsTotal: 0,
    bowlNoballs: 0,
    bowlWides: 0,
    catches: 0,
    batOutTypes: {},
    bowlOutTypes: {},
    batRunDenominations: {},
    bowlRunDenominations: {},
    runnedOut: 0,
    position: [],
    byBatsman: {},
    byBowler: {},
    captained: "",
    wicketkeeper: false,
    matches: 0,
    oversData: Array(20).fill(0),
    overNumbers: [],
  });
  const handleInputChange = (e, el) => {
    setFormData({ ...formData, [el]: e.target.value });
  };

  const handleInputChangeOverNumbers = (e, index) => {
    formData.oversData[parseInt(index)] = parseInt(e.target.value);
  };

  const resetFormData = () => {
    setFormData({
      playerInitials: "",
      displayName: "",
      batRunsTotal: 0,
      batStyle: "",
      bowlStyle: "",
      batRunsTotal: 0,
      batBallsTotal: 0,
      bowlRunsTotal: 0,
      bowlBallsTotal: 0,
      batOutsTotal: 0,
      bowlOutsTotal: 0,
      bowlNoballs: 0,
      bowlWides: 0,
      catches: 0,
      batOutTypes: {},
      bowlOutTypes: {},
      batRunDenominations: {},
      bowlRunDenominations: {},
      runnedOut: 0,
      position: [],
      byBatsman: {},
      byBowler: {},
      captained: "",
      wicketkeeper: false,
      matches: 0,
      oversData: new Array(20).fill(0),
      overNumbers: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.oversData.forEach((overData, index) => {
      formData.overNumbers = formData.overNumbers.concat(
        new Array(parseInt(overData)).fill(index + 1)
      );
    });
    await axios
      .post("http://localhost:5000/api/players", {
        data: formData,
      })
      .then((response) => {
        console.log(response);
      });

    location.reload();

    resetFormData();
  };

  return (
    <>
      <title>Create Player</title>
      <div className="h-full text-center bg-gray-100">
        <div className="py-8">
          <form
            className="w-9/12 px-8 py-8 mx-auto mb-4 bg-white rounded shadow-md"
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
            <FormInputBowlingType handleInputChange={handleInputChange} />
            <div className="my-4">
              <label
                className="block mb-2 text-sm font-bold text-left text-gray-700"
                htmlFor={"bowlStyle"}
              >
                Batting Stats
              </label>
              <div className="flex justify-between gap-x-2">
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batRunsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batRunsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batBallsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batBallsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batOutsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batOutsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="catches"
                  onChange={(e) =>
                    setFormData({ ...formData, catches: e.target.value })
                  }
                />
                <div className="flex justify-start items-center">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked={formData.wicketkeeper}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        wicketkeeper: !formData.wicketkeeper,
                      })
                    }
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckChecked"
                  >
                    Wicketkeeper
                  </label>
                </div>
              </div>
            </div>

            <div className="my-4">
              <label
                className="block mb-2 text-sm font-bold text-left text-gray-700"
                htmlFor={"bowlStyle"}
              >
                Bowling Stats
              </label>
              <div className="flex justify-between gap-x-2">
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlRunsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlRunsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlBallsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlBallsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlOutsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlOutsTotal: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlNoballs"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlNoballs: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlWides"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlWides: e.target.value })
                  }
                />
              </div>
              <div className="my-4">
                <label
                  className="block mb-2 text-sm font-bold text-left text-gray-700"
                  htmlFor={"bowlStyle"}
                >
                  Over Numbers
                </label>
                {[
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ].map((over, index) => (
                  <div className="my-2" key={index}>
                    <label className="block mb-2 text-sm font-bold text-left text-gray-700">
                      {index + 1}
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="number"
                      placeholder={over}
                      key={index}
                      onChange={(e) => handleInputChangeOverNumbers(e, index)}
                    />
                  </div>
                ))}
                <FormInputTypeBasic
                  label="Matches"
                  placeholder="matches"
                  handleInputChange={handleInputChange}
                  required
                />
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

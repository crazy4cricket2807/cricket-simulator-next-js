import React, { useState } from "react";
import FormInputBattingType from "../../components/form/FormInputBattingType";
import FormInputBowlingType from "../../components/form/FormInputBowlingType";
import FormInputTypeBasic from "../../components/form/FormInputTypeBasic";
import { useRouter } from 'next/router'


const Createplayer = () => {
  const [formData, setFormData] = useState({
    playerInitials: "",
    displayName: "",
    batRunsTotal: "",
    batStyle: "",
    bowlStyle: "",
    batRunsTotal: "",
    batBallsTotal: "",
    bowlRunsTotal: "",
    bowlBallsTotal: "",
    batOutsTotal: "",
    bowlOutsTotal: "",
    bowlNoballs: "",
    bowlWides: "",
    catches: "",
    batOutTypes: {},
    bowlOutTypes: {},
    batRunDenominations: {},
    bowlRunDenominations: {},
    runnedOut: "",
    position: [],
    byBatsman: {},
    byBowler: {},
    captained: "",
    wicketkeeper: "",
    matches: "",
    oversData: new Array(20).fill(0),
    overNumbers: [],
  });
  const handleInputChange = (e, el) => {
    setFormData({ ...formData, [el]: e.target.value });
  };

  const handleInputChangeOverNumbers = (e, index) => {
    formData.oversData[index] = e.target.value;
  };

  const router = useRouter();
  
  const resetFormData = () => {
    setFormData({
      playerInitials: "",
      displayName: "",
      batRunsTotal: "",
      batStyle: "",
      bowlStyle: "",
      batRunsTotal: "",
      batBallsTotal: "",
      bowlRunsTotal: "",
      bowlBallsTotal: "",
      batOutsTotal: "",
      bowlOutsTotal: "",
      bowlNoballs: "",
      bowlWides: "",
      catches: "",
      batOutTypes: {},
      bowlOutTypes: {},
      batRunDenominations: {},
      bowlRunDenominations: {},
      runnedOut: "",
      position: [],
      byBatsman: {},
      byBowler: {},
      captained: "",
      wicketkeeper: "",
      matches: "",
      oversData: new Array(20).fill(0),
      overNumbers: [],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.oversData.forEach((overData, index) => {
      formData.overNumbers = formData.overNumbers.concat(new Array(parseInt(overData)).fill(index + 1));
    });
    let res = await fetch("http://localhost:5000/api/players", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    

    router.push("/");

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
                {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((over, index) => (
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

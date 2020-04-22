import React, { useContext } from "react";
import { Context } from "../../../Context";
import styles from "./styles.css";

function Address() {
  const {
    formValues,
    handleClickButton,
    handleClickButtonBack,
    handleFormValuesChange,
  } = useContext(Context);

  const states = [
    "State",
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MP",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UM",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
  ].map((state, i) => {
    return (
      <option key={i} value={state}>
        {state}
      </option>
    );
  });
  return (
    <>
      <h3>Enter your Business Address:</h3>
      <form className="signup-form" onSubmit={handleClickButton}>
        <input
          required
          type="text"
          value={formValues.street}
          placeholder="street"
          name="street"
          onChange={handleFormValuesChange}
        />
        <input
          required
          type="text"
          value={formValues.city}
          placeholder="city"
          name="city"
          onChange={handleFormValuesChange}
        />
        <select
          value={formValues.state}
          name="state"
          placeholder="state"
          onChange={handleFormValuesChange}
        >
          {states}
        </select>
        <input
          required
          type="number"
          value={formValues.zipcode}
          placeholder="zip code"
          name="zipcode"
          onChange={handleFormValuesChange}
        />
        <button id="back-next-bttn" onClick={handleClickButtonBack}>
          Back
        </button>
        <input
          id="back-next-bttn"
          type="submit"
          className="button"
          value="Next"
        ></input>
      </form>
    </>
  );
}

export default Address;

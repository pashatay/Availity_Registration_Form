import React, { useContext, useEffect } from "react";
import { Context } from "../../../Context";
import styles from "./styles.css";

function Npi() {
  const {
    formValues,
    handleValidateBeforeClickButton,
    handleClickButtonBack,
    handleFormValuesChange,
    validateNpi,
  } = useContext(Context);

  useEffect(() => {
    validateNpi();
  });

  return (
    <>
      <h3>Enter your 10-digit NPI number:</h3>
      <form className="signup-form" onSubmit={handleValidateBeforeClickButton}>
        <input
          required
          type="number"
          value={formValues.npi}
          placeholder="NPI#"
          name="npi"
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

export default Npi;

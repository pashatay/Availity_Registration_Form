import React, { useContext, useEffect } from "react";
import { Context } from "../../../Context";
import styles from "./styles.css";

function Contacts() {
  const {
    formValues,
    validateNumber,
    handleValidateBeforeClickButton,
    handleClickButtonBack,
    handleFormValuesChange,
  } = useContext(Context);

  useEffect(() => {
    validateNumber();
  });
  return (
    <>
      <h3>Your contacts:</h3>
      <form className="signup-form" onSubmit={handleValidateBeforeClickButton}>
        <input
          required
          type="text"
          value={formValues.phone}
          placeholder="phone#"
          name="phone"
          onChange={handleFormValuesChange}
        />
        <input
          required
          type="email"
          value={formValues.email}
          placeholder="email"
          name="email"
          onChange={handleFormValuesChange}
        />
        <button id="back-next-bttn" onClick={handleClickButtonBack}>
          Back
        </button>
        <input
          id="back-next-bttn"
          type="submit"
          className="button"
          value="Submit"
        ></input>
      </form>
    </>
  );
}

export default Contacts;

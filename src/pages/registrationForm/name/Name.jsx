import React, { useContext } from "react";
import { Context } from "../../../Context";
import styles from "./styles.css";

function Name() {
  const { formValues, handleClickButton, handleFormValuesChange } = useContext(
    Context
  );
  return (
    <>
      <h3>Your name:</h3>
      <form className="signup-form" onSubmit={handleClickButton}>
        <input
          required
          type="text"
          value={formValues.firstName}
          placeholder="first name"
          name="firstName"
          onChange={handleFormValuesChange}
        />
        <input
          required
          type="text"
          value={formValues.lastName}
          placeholder="last name"
          name={"lastName"}
          onChange={handleFormValuesChange}
        />
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

export default Name;

import React from "react";
import styles from "./styles.css";

function Last() {
  const confirmationNumber = Math.floor(Math.random() * Math.floor(9999999));
  return (
    <>
      <h3 className="confirmation">
        We received your information. We will get in touch with you within two
        business days.
        <br /> <br />
        Here is your confirmation number <span>#{confirmationNumber}</span>.
      </h3>
    </>
  );
}

export default Last;

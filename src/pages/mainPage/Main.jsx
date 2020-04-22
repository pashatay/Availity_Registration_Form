import React, { useContext } from "react";
import "./styles.css";
import { Context } from "../../Context";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Name from "../registrationForm/name/Name";
import Npi from "../registrationForm/npi/Npi";
import Address from "../registrationForm/address/Address";
import Contacts from "../registrationForm/contacts/Contacts";
import Last from "../lastPage/Last";

function Main() {
  const { formCount, handleClickButton } = useContext(Context);
  const introduction = (
    <>
      <h3>Join Availity. Join the feature. </h3>
      <p className="mainpage-p">
        We provide a variety of innovative solutions for HealthCare providers
        across the country. Let us help you today to become tomorrow.
      </p>
      <button class="get-started-bttn" onClick={handleClickButton}>
        Get Started
      </button>
    </>
  );

  const pages = [
    introduction,
    <Name />,
    <Npi />,
    <Address />,
    <Contacts />,
    <Last />,
  ];

  return (
    <>
      <Header />
      {pages[formCount]}
      <Footer />
    </>
  );
}

export default Main;

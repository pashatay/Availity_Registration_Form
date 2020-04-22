import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const formDefaultValues = {
    firstName: "",
    lastName: "",
    npi: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
  };

  const [formCount, setFormCount] = useState(0);
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormValuesChange = (e) => {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value.trim(),
    }));
  };

  const handleClickButton = (e) => {
    e.preventDefault();
    setFormCount((prevState) => prevState + 1);
  };
  const handleValidateBeforeClickButton = (e) => {
    e.preventDefault();
    return errorMsg.length != 0 ? alert(errorMsg) : handleClickButton();
  };
  const handleClickButtonBack = (e) => {
    e.preventDefault();
    setFormCount((prevState) => prevState - 1);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formValues));
    //in real world i would make an api post request here
    setFormCount((prevState) => prevState + 1);
    setFormValues(formDefaultValues);
  };

  const validateNpi = () => {
    const numberLength = formValues.npi.toString().length;
    return numberLength != 10
      ? setErrorMsg("NPI# must contain 10 digits!")
      : setErrorMsg("");
  };

  const validateNumber = () => {
    const validNumber = formValues.phone.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
    return validNumber
      ? setErrorMsg("")
      : setErrorMsg("Phone number is not valid!");
  };

  return (
    <Context.Provider
      value={{
        formCount,
        setFormCount,
        handleClickButton,
        handleValidateBeforeClickButton,
        handleClickButtonBack,
        formValues,
        handleFormValuesChange,
        handleSubmitButton,
        errorMsg,
        setErrorMsg,
        validateNpi,
        validateNumber,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

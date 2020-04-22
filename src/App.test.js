import React from "react";
import { ContextProvider } from "./Context";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/mainPage/Main";
import Last from "./pages/lastPage/Last";
import Address from "./pages/registrationForm/address/Address";
import Contacts from "./pages/registrationForm/contacts/Contacts";
import Name from "./pages/registrationForm/name/Name";
import Npi from "./pages/registrationForm/npi/Npi";

afterEach(cleanup);

describe("Rendering tests", () => {
  it("App renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Header renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Header />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Footer renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Footer />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Main renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Main />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Last renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Last />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Address renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Address />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Contacts renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Contacts />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Name renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Name />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Npi renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Npi />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
});

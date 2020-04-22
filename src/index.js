import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./Context";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

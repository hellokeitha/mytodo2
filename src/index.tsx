import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import ThemeProvider from "./components/ThemeProvider";

const root = document.getElementById("root") || document.createElement("div");
ReactDOM.render(
  // App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import App from './page/App'

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

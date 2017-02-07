import React from "react";
import ReactDOM from "react-dom";
import Settings from "./Settings.json";
import Application from "./app/Application";

const settings = Settings[NODE_ENV];
const appNode = document.getElementById("app");

ReactDOM.render(<Application {...settings} />, appNode);

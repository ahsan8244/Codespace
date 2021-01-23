/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/ 
import React from "react";
import ReactDOM from "react-dom";
import { theme, CSSReset, ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function Index() {
  return (
    <ChakraProvider theme={newTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

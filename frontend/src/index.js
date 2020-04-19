import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Router from "./Router";
import MyProvider from "./context";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b7a69a",
      main: "#6b1740",
      dark: "#b6257b",
      contrastText: "#000",
    },
    secondary: {
      light: "#5d76ed",
      main: "#114bba",
      dark: "#002589",
      contrastText: "#FFF",
    },
    background: {
      default: "#b7a69a",
    },
  },
});

function WhitTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

function WhitContext() {
  return (
    <BrowserRouter>
      <MyProvider>
        <WhitTheme />
      </MyProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<WhitContext />, document.getElementById("root"));

serviceWorker.unregister();

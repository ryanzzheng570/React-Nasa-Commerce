import React from "react";
import MainPage from "./component/MainPage";
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from "./themes/theme";

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <MainPage />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;

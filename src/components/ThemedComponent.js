import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    sf_green: "#13870d",
    sf_grey: "#F6F5FD",
    sf_red: "#ed1c24",
  },
};

const ThemedComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemedComponent;

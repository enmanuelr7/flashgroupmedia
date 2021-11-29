import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;

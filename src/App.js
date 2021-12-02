import Main from "./pages/Main";
import Start from "./pages/Start";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global-style";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/main" element={<Main />} />
          <Route path="/*" element={<p>Page Not Found</p>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

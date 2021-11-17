import MainTheme from "./MainTheme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

import RouterProvider from "./providers/Routers/RouterProvider";

//On App.tsx we create the link to the provider
function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#dacece" },
        }}
      />
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;

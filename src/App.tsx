import MainTheme from "./views/Components/@theme/MainTheme";
import { ThemeProvider } from "@mui/material/styles";

import RouterProvider from "./providers/Routers/RouterProvider";

//On App.tsx we create the link to the provider
function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;

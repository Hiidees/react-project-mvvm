import { createTheme } from "@mui/material";

export default createTheme({
    components: {
      MuiDrawer : {
        defaultProps: {
          PaperProps: {
            sx:{
              width: 240,
              backgroundColor:"#6d5e6e"
            }
          }
        }
      }
    },
    
    palette: {
      primary: {
        main: "#a354f5",
        light: "#bd7fff",
        contrastText: "#fff",
      },
    },
  });
  
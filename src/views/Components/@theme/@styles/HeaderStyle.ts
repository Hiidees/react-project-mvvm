import { Box, styled } from "@mui/system";
import { AppBar, Button, Drawer, IconButton, Paper, Toolbar, Typography } from "@mui/material";

const drawerWidth = 180;

const LButton = styled(Button)(({theme}) =>({
    
    backgroundColor: "#44cfb0",
    padding: 8,
    margin: 8,
    borderRadius: 4,
  }));

  const SButton = styled(Button)(({theme}) =>({
    
    backgroundColor: "#ee117f",
    padding: 8,
    margin: 8,
    borderRadius: 4,
  }));

  const IconButtonLogout = styled(IconButton)(({theme}) =>({
    color: "#f7f4f7"
   
  }));

  const IconButtonMenu = styled(IconButton)(({theme}) =>({
    color: "#f7f4f7"
   
  }));

  const IconButtonClose = styled(IconButton)(({theme}) =>({
    color: "#f21216"
   
  }));
  const MyAppbar = styled(AppBar)(({theme}) =>({
    
    backgroundColor: theme.palette.primary.light,
    component: "div"
  }));

  

  const MyTypography = styled(Typography)(({theme}) =>({
    
    flexGrow : 1
  }));

 
  const MyDrawer = styled(Drawer)(({theme}) =>({
     
    flexGrow : 1
    
  }
  ));

  const MyBox = styled(Box)(({theme}) =>({
    width: "auto"
    
  }
  ));


export {LButton, SButton, IconButtonLogout, MyAppbar, MyTypography, IconButtonMenu, MyDrawer, IconButtonClose,MyBox};
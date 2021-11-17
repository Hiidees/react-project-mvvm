import { styled } from "@mui/system";
import {  Avatar,  Button,  FormHelperText, Grid,  ListItem, ListItemText, TextField, } from "@mui/material";
import {  red } from "@mui/material/colors";


export const GridSignup = styled(Grid)(({theme}) =>({
        marginTop: 10
  }));


export const ListAvatar = styled(ListItem)(({theme}) =>({
    marginBottom: "15px"

}));

export const SignupAvatar = styled(Avatar)(({theme}) =>({
    width: 70,
    height: 70,
    backgroundColor: "#ee117f"

}));

export const ListAvatarText = styled(ListItemText)(({theme}) =>({
    marginLeft: 10

}));



export const MyButton = styled(Button)(({theme}) =>({
    width: 100,
    margin: "0 auto",
    marginTop: 10,
    backgroundColor: "#ee117f"

}));

export const GridImage = styled(Grid)(({theme}) =>({
    marginTop: 10

}));


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
    backgroundColor: red[500]

}));

export const ListAvatarText = styled(ListItemText)(({theme}) =>({
    marginLeft: 10

}));



export const MyButton = styled(Button)(({theme}) =>({
    marginTop: 10,
    backgroundColor: red[500]

}));

export const GridImage = styled(Grid)(({theme}) =>({
    marginTop: 10

}));


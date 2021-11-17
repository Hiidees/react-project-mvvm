import { styled } from "@mui/system";
import {  Avatar,  Button,  CardMedia,  FormHelperText, Grid,  ListItem, ListItemText, } from "@mui/material";
import { green } from "@mui/material/colors";


export const GridLogin = styled(Grid)(({theme}) =>({
        marginTop: 10
  }));


export const ListAvatar = styled(ListItem)(({theme}) =>({
    marginBottom: "15px"

}));

export const LoginAvatar = styled(Avatar)(({theme}) =>({
    width: 70,
    height: 70,
    backgroundColor: "#44cfb0"

}));

export const ListAvatarText = styled(ListItemText)(({theme}) =>({
    marginLeft: 10

}));

export const HelperForm = styled(FormHelperText)(({theme}) =>({
    marginBottom: 5

}));

export const MyButton = styled(Button)(({theme}) =>({
    width: 100,
    margin: "0 auto",
    marginTop: 10,
    backgroundColor: "#44cfb0"

}));

export const GridImage = styled(Grid)(({theme}) =>({
    marginTop: 10

}));
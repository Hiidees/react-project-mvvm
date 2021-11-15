import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  FormControl,
  ListItemAvatar,
  CardMedia,
  Stack,
} from "@mui/material";

import {
  GridSignup,
  ListAvatar,
  SignupAvatar,
  ListAvatarText,
  MyButton,
  GridImage,
} from "../../Components/@theme/@styles/SignupStyle";

export default function Register() {
  return (
    <GridSignup container spacing={2} alignItems="center">
      <Grid item xs={12} sm={7} md={6}>
        <ListAvatar>
          <ListItemAvatar>
            <SignupAvatar>R</SignupAvatar>
          </ListItemAvatar>
          <ListAvatarText primary="Signup" secondary="Join to us!" />
        </ListAvatar>

        <FormControl fullWidth>
          <Stack spacing={2}>
            <TextField label="Email" id="outlined-size-normal" size="medium" />

            <TextField
              label="Password"
              type="password"
              id="outlined-size-normal"
              size="medium"
            />

            <TextField
              label="Confirm Password"
              type="password"
              id="outlined-size-normal"
              size="medium"
            />
            <MyButton type="submit" variant="contained">
              Signup
            </MyButton>
          </Stack>
        </FormControl>
      </Grid>
      <GridImage
        item
        display={{ xs: "none", sm: "block", md: "block" }}
        xs={12}
        sm={5}
        md={6}
      >
        <CardMedia component="img" image="/koala.png" />
      </GridImage>
    </GridSignup>
  );
}

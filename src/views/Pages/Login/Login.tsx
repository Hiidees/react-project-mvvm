import { useForm } from "react-hook-form";
import ILoginViewProps from "../../../@types/props/views/ILoginViewProps";
import ILoginForm from "../../../@types/forms/ILoginForm";
import {
  Grid,
  TextField,
  FormControl,
  ListItemAvatar,
  CardMedia,
  Alert,
} from "@mui/material";

import {
  GridLogin,
  ListAvatar,
  LoginAvatar,
  ListAvatarText,
  HelperForm,
  MyButton,
  GridImage,
} from "../../Components/@theme/@styles/LoginStyle";

export default function Login(props: ILoginViewProps) {
  const { errorMessage, onSubmit, isAuthenticating } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  return (
    <GridLogin container spacing={2} alignItems="center">
      <Grid item xs={12} sm={7} md={6}>
        <ListAvatar>
          <ListItemAvatar>
            <LoginAvatar>L</LoginAvatar>
          </ListItemAvatar>
          <ListAvatarText primary="Login" secondary="Welcome back!" />
        </ListAvatar>
        {errorMessage && (
          <Alert
            variant="filled"
            severity="error"
            sx={{ marginBottom: "15px" }}
          >
            {errorMessage}
          </Alert>
        )}
        <FormControl fullWidth>
          <TextField
            label="Email"
            id="outlined-size-normal"
            size="medium"
            {...register("email", {
              required: true,
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              maxLength: 30,
            })}
            error={!!errors.email}
            helperText={errors.email && "Invalid email."}
            disabled={isAuthenticating}
          />

          <HelperForm id="my-helper-text">
            We'll never share your email!
          </HelperForm>

          <TextField
            label="Password"
            type="password"
            id="outlined-size-normal"
            size="medium"
            {...register("password", {
              required: true,
              maxLength: 20,
            })}
            error={!!errors.password}
            helperText={errors.password && "Invalid password."}
            disabled={isAuthenticating}
          />

          <MyButton
            onClick={handleSubmit((data) =>
              onSubmit(data.email, data.password)
            )}
            type="submit"
            variant="contained"
            disabled={isAuthenticating}
          >
            Login
          </MyButton>
        </FormControl>
      </Grid>
      <GridImage
        item
        display={{ xs: "none", sm: "block", md: "block" }}
        xs={12}
        sm={5}
        md={6}
      >
        <CardMedia component="img" image="/lion.png" />
      </GridImage>
    </GridLogin>
  );
}

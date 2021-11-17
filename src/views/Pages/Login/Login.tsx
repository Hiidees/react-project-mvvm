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
  Snackbar,
} from "@mui/material";

import {
  GridLogin,
  ListAvatar,
  LoginAvatar,
  ListAvatarText,
  HelperForm,
  MyButton,
  GridImage,
} from "./LoginStyle";

export default function Login(props: ILoginViewProps) {
  const { errorMessages, onSubmit, isLoggingin, onClickCloseAlert } = props;

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
        {errorMessages.map((errorMessage, index) => (
          <Alert
            key={index}
            sx={{ marginBottom: "15px" }}
            severity="error"
            variant="filled"
            onClose={() => {
              onClickCloseAlert(index);
            }}
          >
            {errorMessage}
          </Alert>
        ))}
        <FormControl fullWidth>
          <TextField
            label="Email"
            id="outlined-size-normal"
            size="medium"
            disabled={isLoggingin}
            {...register("email", {
              required: true,
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              maxLength: 30,
            })}
            error={!!errors.email}
            helperText={errors.email && "Invalid email."}
          />

          <HelperForm id="my-helper-text">
            We'll never share your email!
          </HelperForm>

          <TextField
            label="Password"
            type="password"
            id="outlined-size-normal"
            size="medium"
            disabled={isLoggingin}
            {...register("password", {
              required: true,
              maxLength: 20,
            })}
            error={!!errors.password}
            helperText={errors.password && "Invalid password."}
          />

          <MyButton
            onClick={handleSubmit((data) =>
              onSubmit(data.email, data.password)
            )}
            type="submit"
            disabled={isLoggingin}
            variant="contained"
          >
            Login
          </MyButton>
        </FormControl>
      </Grid>
      <GridImage
        item
        display={{ xs: "block", sm: "block", md: "block" }}
        xs={12}
        sm={5}
        md={6}
      >
        <CardMedia component="img" image="/blog.svg" />
      </GridImage>
    </GridLogin>
  );
}

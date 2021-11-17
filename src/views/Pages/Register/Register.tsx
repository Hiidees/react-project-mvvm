import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  FormControl,
  ListItemAvatar,
  CardMedia,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  GridSignup,
  ListAvatar,
  SignupAvatar,
  ListAvatarText,
  MyButton,
  GridImage,
} from "../../Components/@theme/@styles/SignupStyle";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ISignupForm from "../../../@types/forms/ISignupForm";
import ISignupViewProps from "../../../@types/props/views/ISignupViewProps";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function Register(props: ISignupViewProps) {
  const { errorMessages, onSubmit, onClickCloseAlert, isAddingUser } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(validationSchema) });

  return (
    <GridSignup container spacing={2} alignItems="center">
      <Grid item xs={12} sm={7} md={6}>
        <ListAvatar>
          <ListItemAvatar>
            <SignupAvatar>R</SignupAvatar>
          </ListItemAvatar>
          <ListAvatarText primary="Signup" secondary="Join to us!" />
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
          <Stack spacing={2}>
            <TextField
              label="Email"
              id="outlined-size-normal"
              size="medium"
              disabled={isAddingUser}
              {...register("email", {
                required: true,
                pattern:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                maxLength: 30,
              })}
              error={!!errors.email}
              helperText={errors.email && errors.email?.message}
            />

            <TextField
              label="Password"
              type="password"
              id="Password"
              size="medium"
              disabled={isAddingUser}
              {...register("password", {
                required: true,
                maxLength: 20,
              })}
              error={!!errors.password}
              helperText={errors.password && errors.password?.message}
            />

            <TextField
              label="Confirm Password"
              type="password"
              id="ConfirmPassword"
              size="medium"
              disabled={isAddingUser}
              {...register("confirmPassword", {
                required: true,
                maxLength: 20,
              })}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword?.message
              }
            />
          </Stack>
          <MyButton
            type="submit"
            disabled={isAddingUser}
            onClick={handleSubmit((data) =>
              onSubmit(data.email, data.password)
            )}
            variant="contained"
          >
            Signup
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
        <CardMedia component="img" image="/Marketing.svg" />
      </GridImage>
    </GridSignup>
  );
}

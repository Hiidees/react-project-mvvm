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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(validationSchema) });

  function onSubmit(email: string, password: string) {}

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
              helperText={errors.email && errors.email?.message}
            />

            <TextField
              label="Password"
              type="password"
              id="Password"
              size="medium"
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
              {...register("confirmPassword", {
                required: true,
                maxLength: 20,
              })}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword?.message
              }
            />
            <MyButton
              type="submit"
              onClick={handleSubmit((data) =>
                onSubmit(data.email, data.password)
              )}
              variant="contained"
            >
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

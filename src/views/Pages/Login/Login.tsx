import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import ILoginViewProps from "../../../@types/props/ILoginViewProps";
import ILoginForm from "../../../@types/forms/ILoginForm";

export default function Login(props: ILoginViewProps) {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  return (
    <div className="container-lg my-5 p-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 d-none d-md-block">
          <img src="/koala.png" alt="not-found" className="img-fluid " />
        </div>
        <div className="col-md-4 text-md-start ms-5">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className="form-floating mb-3">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                })}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  This is required! The email format is: email@example.com
                </div>
              )}
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                })}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              {errors.password && (
                <div className="alert alert-danger" role="alert">
                  This is required! It must be at least 8 characters. It must
                  contain at least 1 uppercase letter, 1 lowercase letter, and 1
                  number. It Can contain special characters
                </div>
              )}
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me!
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

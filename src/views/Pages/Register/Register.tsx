import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Register() {
  return (
    <div className="container-lg my-5 p-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 d-none d-md-block">
          <img src="/lion.png" alt="not-found" className="img-fluid " />
        </div>
        <div className="col-md-4 text-md-start ms-5 ">
          <form className="row g-3">
            <div className="form-floating mb-3 col-md-12">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3 col-md-12">
              <input
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="Password"
              />
              <label htmlFor="floatingInput">Password</label>
            </div>

            <div className="form-floating mb-3 col-12">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Firstname"
              />
              <label htmlFor="floatingInput">Firstname</label>
            </div>

            <div className="form-floating mb-3 col-12">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Lastname"
              />
              <label htmlFor="floatingInput">Lastname</label>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

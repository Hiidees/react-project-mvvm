import { LoginController } from '../controllers/LoginController';
import { LoginViewModel } from '../view-models/LoginViewModel';


export default function LoginProvider() {
  const loginViewModel = new LoginViewModel();

  return (
    <div>
      <LoginController LoginViewModel={loginViewModel}></LoginController>
    </div>
  );
}

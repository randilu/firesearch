import { getAuth } from "firebase/auth";
import { FC, ChangeEvent, useState } from "react";
import { Home } from "../../pages/Home";
import { signUpWithUserCredentials } from "../../utils";
import { Button, Input } from "@material-tailwind/react";

const SignUpForm: FC = (props) => {
  const auth = getAuth();
  const [firstName, setFirstName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    console.log({ value, name });

    switch (name) {
      case 'firstName':
        setFirstName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log({ firstName, email, password })

    const user = await signUpWithUserCredentials(auth, email, password);

    if (user) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col items-center w-1/4 rounded-lg bg-white sm:w-1/16 md:w-1/8 lg:w-1/4"
        id="sign-up-box"
      >
        <div className="w-5/6 my-4">
          <Input
            icon={<i className="fa-solid fa-user text-purple-700" />}
            name="firstName"
            placeholder="First Name..."
            variant="static"
            onChange={handleOnChange}
          />
        </div>
        <div className="w-5/6 my-4">
          <Input
            icon={<i className="fa-solid fa-email fa-envelope text-purple-700" />}
            name="email"
            placeholder="Email..."
            variant="static"
            onChange={handleOnChange}
          />

        </div>
        <div className="w-5/6 my-4">
          <Input
            icon={<i className="fa-solid fa-email fa-lock text-purple-700" />}
            name="password"
            placeholder="Password"
            type="password"
            variant="static"
            onChange={handleOnChange}
          />
        </div>
        <div className="w-5/6 my-4">
          <Button
            variant="text"
            size="lg"
            onClick={handleSignUp}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  )
};

export default SignUpForm;
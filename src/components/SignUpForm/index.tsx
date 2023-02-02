import type { FC } from "react";

import { Button, Input } from "@material-tailwind/react";

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => (
  <div className="flex flex-col justify-center items-center">
    <div
      className="flex flex-col items-center w-1/4 rounded-lg bg-white"
      id="sign-up-box"
    >
      <div className="w-5/6 my-4">
        <Input
          icon={ <i className="fa-solid fa-user"/>}
          variant="static"
          placeholder="First Name..."
        />
      </div>
      <div className="w-5/6 my-4">
        <Input variant="static" placeholder="Email..." />
      </div>
      <div className="w-5/6 my-4">
        <Input variant="static" placeholder="Password" />
      </div>
      <div className="w-5/6 my-4">
        <Button variant="text" size="lg">
          GET STARTED
        </Button>
      </div>
    </div>
  </div>
);

export default SignUpForm;
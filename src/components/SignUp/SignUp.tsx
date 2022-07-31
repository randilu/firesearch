import type { FC } from "react";

import { Button, Input, IconButton } from "@material-tailwind/react";

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => (
  <div className="flex flex-col justify-center items-center">
    <div
      className="flex flex-col items-center w-1/4 rounded-lg bg-white"
      id="sign-up-box"
    >
      <div className="w-5/6 my-4">
        <Input
          icon={<i className="fa-user" />}
          variant="static"
          placeholder="First Name..."
        />
      </div>
      <div className="w-5/6 my-4">
        <Input variant="static" placeholder="Email..." color="purple" />
      </div>
      <div className="w-5/6 my-4">
        <Input variant="static" placeholder="Password" color="purple" />
      </div>
      <div className="w-5/6 my-4">
        <Button variant="text" size="lg">
          GET STARTED
        </Button>
      </div>
    </div>
  </div>
);

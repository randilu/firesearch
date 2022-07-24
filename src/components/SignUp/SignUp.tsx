import type { FC } from "react";

import { Input } from "@material-tailwind/react";

interface SignUpProps {}

export const SignUp: FC<SignUpProps> = () => (

    <div className="flex flex-col justify-center items-center">
      <div className="w-1/3">
        <Input variant="static" placeholder="Static" />
      </div>
      <div className="w-1/3">
        <Input variant="static" placeholder="Static" />
      </div>
      <div className="w-1/3">
        <Input variant="static" placeholder="Static" />
      </div>
    </div>
);

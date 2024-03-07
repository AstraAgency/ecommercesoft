import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import { Input, Button } from "@nextui-org/react";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-black	flex">
        <div className="leftlogin w-2/4 bg-gray-300"></div>
        <div className="righthlogin w-2/4 bg-gray-50 flex justify-center items-center">
          <div className="w-[500px] p-[40px] flex flex-col gap-4 ">
            <h2 className="text-base font-medium">Sign in</h2>
            <form action="" className="flex flex-col gap-8	">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button className="bg-violet-500	 text-white">
                Iniciar Sesion
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

"use client";

import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
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
            <form action="" className="flex flex-col gap-8 max-h-[264px]	">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                errorMessage="Please enter a valid email"
                variant="bordered"
                isInvalid={true}
              />
              <Button className="bg-violet-500	 text-white">
                Iniciar Sesion
              </Button>
              <Link href={"/register"}>
                <p className="text-xs font-normal">No tienes una cuenta?</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

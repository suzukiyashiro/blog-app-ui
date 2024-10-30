"use client";

import { Lock, Mail, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardContent, Input } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3>Email</h3>
            <div className="relative">
              <Input
                placeholder="example@gmail.com"
                type="email"
                className="pl-8 w-full"
              />
              <Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
          </div>
          <div className="space-y-2">
            <h3>Password</h3>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="pl-8 w-full"
              />
              <Lock className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <button
                className="absolute right-0 top-0 hover:bg-transparent"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VisibilityOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Visibility className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </CardContent>
        <footer className="flex flex-col space-y-4">
          <Button type="submit" className="w-full bg-slate-100">
            Log in
          </Button>
          <div className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary underline">
              Sign up
            </Link>
          </div>
        </footer>
      </Card>
    </div>
  );
};

export default Login;

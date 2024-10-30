import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b-2">
      <div className="px-4 flex h-14 items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <h1 className="text-3xl font-bold">BlogApp</h1>
        </Link>
        <Button className="text-lg">Logout</Button>
      </div>
    </header>
  );
};

export default Header;

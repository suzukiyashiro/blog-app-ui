import React from "react";
import Header from "./components/Header";
import User from "./components/User";
import Footer from "./components/Footer";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { ChevronRight, Favorite, Message, Share } from "@mui/icons-material";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="container mx-auto mt-2 mb-2 flex-1">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        <div className="h-full grid gap-6 md:grid-cols-[2fr_1fr]">
          <Posts />
          <User />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import {
  Avatar,
  Button,
  Card,
  CardContent,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

const User = () => {
  return (
    <aside className="space-y-4">
      <Card>
        <CardContent className="flex items-center space-x-4">
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">
              Web developer and tech enthusiast. Sharing insights on the latest
              in web development.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center space-y-4">
          <TextareaAutosize
            placeholder="What's are you now ?"
            className="w-full p-2 border"
            maxLength={10}
          />
          <input type="file" />

          <Button
            type="submit"
            className="w-full text-white font-bold bg-blue-500 flex items-center justify-center"
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default User;

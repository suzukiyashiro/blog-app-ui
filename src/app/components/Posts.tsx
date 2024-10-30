import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import { ChevronRight, Favorite, Message, Share } from "@mui/icons-material";

const Posts = () => {
  return (
    <section className="h-[80vh] overflow-auto space-y-4">
      <Card>
        <CardContent>
          <img
            src="https://picsum.photos/400/200"
            alt="Blog post image"
            className="object-cover rounded-md mb-4 w-full"
          />
          <p className="text-muted-foreground">
            Exploring the latest trends and technologies shaping the future of
            web development. From AI-driven interfaces to WebAssembly, discover
            what's next in the world of web tech.
          </p>
        </CardContent>
        <div className="flex justify-between">
          <div className="flex space-x-4 text-muted-foreground">
            <Button>
              <Favorite className="mr-1 h-4 w-4" />
              124
            </Button>
            <Button>
              <Message className="mr-1 h-4 w-4" />
              22
            </Button>
            <Button>
              <Share className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button>
            Read More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Card>
      <Card>
        <CardContent>
          <img
            src="https://picsum.photos/400/200"
            alt="Blog post image"
            className="object-cover rounded-md mb-4 w-full"
          />
          <p className="text-muted-foreground">
            Exploring the latest trends and technologies shaping the future of
            web development. From AI-driven interfaces to WebAssembly, discover
            what's next in the world of web tech.
          </p>
        </CardContent>
        <div className="flex justify-between">
          <div className="flex space-x-4 text-muted-foreground">
            <Button>
              <Favorite className="mr-1 h-4 w-4" />
              124
            </Button>
            <Button>
              <Message className="mr-1 h-4 w-4" />
              22
            </Button>
            <Button>
              <Share className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button>
            Read More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Card>
      <Card>
        <CardContent>
          <img
            src="https://picsum.photos/400/200"
            alt="Blog post image"
            className="object-cover rounded-md mb-4 w-full"
          />
          <p className="text-muted-foreground">
            Exploring the latest trends and technologies shaping the future of
            web development. From AI-driven interfaces to WebAssembly, discover
            what's next in the world of web tech.
          </p>
        </CardContent>
        <div className="flex justify-between">
          <div className="flex space-x-4 text-muted-foreground">
            <Button>
              <Favorite className="mr-1 h-4 w-4" />
              124
            </Button>
            <Button>
              <Message className="mr-1 h-4 w-4" />
              22
            </Button>
            <Button>
              <Share className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button>
            Read More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Card>
      <Card>
        <CardContent>
          <img
            src="https://picsum.photos/400/200"
            alt="Blog post image"
            className="object-cover rounded-md mb-4 w-full"
          />
          <p className="text-muted-foreground">
            Exploring the latest trends and technologies shaping the future of
            web development. From AI-driven interfaces to WebAssembly, discover
            what's next in the world of web tech.
          </p>
        </CardContent>
        <div className="flex justify-between">
          <div className="flex space-x-4 text-muted-foreground">
            <Button>
              <Favorite className="mr-1 h-4 w-4" />
              124
            </Button>
            <Button>
              <Message className="mr-1 h-4 w-4" />
              22
            </Button>
            <Button>
              <Share className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button>
            Read More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default Posts;

import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main.js";
import PostsFeed from "./components/PostsFeed";
import NewPost from "./components/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Main} />
        <Route exact path="/posts/feed" render={() => <PostsFeed />} />
        <Route exact path="/posts/new" render={() => <NewPost />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

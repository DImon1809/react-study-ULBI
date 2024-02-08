import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const privateRoutes = [
  { path: "/", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostIdPage /> },
  { path: "*", component: <Error /> },
];

export const publicRoutes = [
  { path: "/", component: <Login /> },
  { path: "*", component: <Error /> },
];

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/users",
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users />,
            },
            {
                path: "/user/:userId",
                loader: ({ params }) =>
                    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails />,
            },
            {
                path: "/posts",
                loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
                element: <Posts />,
            },
            {
                path: "/post/:postId",
                loader: ({ params }) =>
                    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetails />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

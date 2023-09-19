import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import Header from "./assets/components/Header/Header";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import Users from "./assets/components/Users/Users";
import UserDetails from "./assets/components/UserDetails/UserDetails";
import Posts from "./assets/components/Posts/Posts";
import PostDetails from "./assets/components/PostDetails/PostDetails";
import ErrorPage from "./assets/components/ErrorPage/ErrorPage";

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

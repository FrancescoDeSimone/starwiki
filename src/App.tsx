import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    useNavigate,
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";


export default () => {
    const navigate = useNavigate()
    console.log(sessionStorage.getItem('token'))
    return sessionStorage.getItem('token') == null ?
        useRoutes([
            { path: "/starwiki/signup", element: <SignUp /> },
            { path: "/starwiki/login", element: <Login /> },
            { path: "/starwiki/", element: <Login /> },
        ]) :
        useRoutes([
            { path: "/starwiki/signup", element: <SignUp /> },
            { path: "/starwiki/login", element: <Login /> },
            { path: "/starwiki/starwiki", element: <Main /> },
            { path: "/starwiki/detail", element: <DetailPage /> },
            { path: "/starwiki/", element: <Main /> },
        ]);
}

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
            { path: "signup", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "/", element: <Login /> },
        ]) :
        useRoutes([
            { path: "signup", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "starwiki", element: <Main /> },
            { path: "detail", element: <DetailPage /> },
        ]);
}

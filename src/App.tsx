import {
    useRoutes,
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";


export default () => {
    let token = sessionStorage.getItem('token')
    return token == "" || token == null ?
        useRoutes([
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <Login /> },
            { path: "/", element: <Login /> },
            { path: "/starwiki", element: <Login /> },
            { path: "*", element: <Login /> },
        ]) :
        useRoutes([
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <Login /> },
            { path: "/starwiki", element: <Main /> },
            { path: "/detail", element: <DetailPage /> },
        ]);
}

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Main from "./Pages/Main";

export default () =>
    useRoutes([
        { path: "/", element: <Main /> },
        { path: "starwiki", element: <Main /> },
        { path: "detail", element: <DetailPage /> },
    ]);

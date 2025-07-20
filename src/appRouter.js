import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/main-container/MainContainer";
import App from "./App";
import WatchPage from "./components/main-container/WatchPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <MainContainer/>
            },
            {
                path: '/watch',
                element: <WatchPage/>
            }
        ]


    }
])
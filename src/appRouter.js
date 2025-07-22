import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/main-container/MainContainer";
import App from "./App";
import WatchPage from "./components/main-container/WatchPage";
import ResultsPage from "./components/main-container/ResultsPage";

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
            },
            {
                path: '/results',
                element: <ResultsPage />
            }
        ]


    }
])
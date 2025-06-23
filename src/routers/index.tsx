import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/homePages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
]);

export default router;

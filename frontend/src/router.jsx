import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />
            }
        ]
    }
])

export default router
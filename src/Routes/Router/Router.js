import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";
import Home from "../../pages/Home/Home";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/productdetails',
                element: <ProductDetails />
            }
        ]
    }
])

export default router;
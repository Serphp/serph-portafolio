import { createBrowserRouter } from "react-router-dom"
import About from "../pages/About"
import User from "../Layout/User"
import Home from "../pages/Home"
import Proyectos from "../pages/Proyectos"
import Certificates from "../pages/Certificates"
import NotFound from "../pages/NotFound"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <User />,
        children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "Proyectos",
            element: <Proyectos />
        },
        {
            path: "Certificates",
            element: <Certificates />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
    },
])
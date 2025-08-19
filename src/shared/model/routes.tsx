import {createBrowserRouter} from "react-router";
import {lazy} from "react";
import App from "@/app/App.tsx";

const Login = lazy(() => import("@/features/auth/login.tsx"))
const Register = lazy(() => import("@/features/auth/register.tsx"))

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {path: "login", Component: Login},
            {path: "register", Component: Register},
        ],
    },
]);

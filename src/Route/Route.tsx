import React from "react";
import CreateAnAccount from "../components/CreateAnAccount"
import Dashboard from "../components/DashBoard";
import SignIn from "../components/SignIn";

export const Route = [
    {
        path:"/",
        element:<CreateAnAccount/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/sign_in",
        element:<SignIn/>
    }


]
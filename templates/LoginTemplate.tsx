import React from "react";
import Login from "@/components/organisms/Login";

export default function LoginTemplate() {
    return (
        <div className="min-h-screen bg-white flex">
            <Login />
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/images/auth-background.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

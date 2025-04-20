"use client"

import { signOut } from "next-auth/react";

const ButtonLogOut = () => {
    return (
        <button className="btn btn-ghost" onClick={() => { signOut({redirectTo: "/"})
        } }>
            Log Out
        </button>
    )
}

export default ButtonLogOut;
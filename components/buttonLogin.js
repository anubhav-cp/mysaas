"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";

const buttonLogin = (props) => {
    const {session, extraStyle} = props
    
    if(session) {
        return <Link href='dashboard' className={`btn btn-primary ${extraStyle ? extraStyle:''}`}>Welcome {session.user.name || "friend"}</Link>
    }
        
    return(
        
        <button onClick={() => {
            signIn(undefined, {callbackUrl: "/dashboard "})
        }} className={`btn btn-primary ${extraStyle ? extraStyle:''}`}>Get Started
        </button>
        
    )
    
    
}

export default buttonLogin;
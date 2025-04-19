import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function layoutPrivate({children}) {
    const session = await auth()

    if (!session){
        redirect('/dashboard')
    }

    return children
}
import Link from "next/link";

const buttonLogin = (props) => {
    const {hasLoggedIn, name} = props
    
    if(hasLoggedIn) {
        return <Link href='dashboard' className="btn btn-primary">Welcome {name}</Link>
    }
        
    return <Link href=''>Please Login!</Link>
    
    
}

export default buttonLogin;
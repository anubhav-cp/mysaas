import Link from "next/link";

const buttonLogin = (props) => {
    const {hasLoggedIn, name, extraStyle} = props
    
    if(hasLoggedIn) {
        return <Link href='dashboard' className={`btn btn-primary ${extraStyle ? extraStyle:''}`}>Welcome {name}</Link>
    }
        
    return <Link href=''>Please Login!</Link>
    
    
}

export default buttonLogin;
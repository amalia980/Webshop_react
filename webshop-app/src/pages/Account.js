import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import './CSS/Account.css'

const Account = () => {
    
    const {user} = useContext(UserContext)

    return (
        <div className="bodyAccount">
            <h2>Account</h2>
            <p className="welcomeText">Welcome {user.firstname}!</p>
        </div>
    )
}

export default Account

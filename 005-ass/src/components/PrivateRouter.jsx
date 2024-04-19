import { Navigate, Outlet } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"

const ProviteRouter = () => {
   
    const {loginIn, setLoginIn} = useLoginContext()

    return loginIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProviteRouter
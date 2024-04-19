import { Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Login = () => {

    const { loginIn, setLoginIn } = useLoginContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginIn(true)
        Navigate(-1) //* bir önceki dizindeki adrese gider
    }

  return (

    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

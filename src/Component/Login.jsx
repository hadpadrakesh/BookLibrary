import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    let email =  useRef();
    let password =  useRef();
    let navigate = useNavigate();

    let handleLogin = (e)=>{
        e.preventDefault();
        
        let users=JSON.parse(localStorage.getItem("userdetails"));
        console.log(users);
            users.forEach((v,i) => {
                if(users[i].email!=email.current.value)
            {
                alert("UserNot Found")
            }
            else if(users[i].password!=password.current.value)
            {
                alert("password mismatch,please give valid password!")
            }
            else{
                // JSON.stringify(localStorage.removeItem("login"))
                localStorage.setItem("login",JSON.stringify(users));
                alert("Login Succesfull")
                navigate("/main")
            }
            });
    }

    return ( 
        <div className="maindiv">

            <div className="login-cont">
            <div className="login-box">
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email id" ref={email} required/>
                    <input type="password" placeholder="Password" ref={password} required />
                    <input type="submit" value="login" />
                </form>
             <span>Dont have an account ?  </span>
                <Link to="/signup"><button>Create account</button></Link>
            </div>
        </div>

        </div>
        
     );
}
export default Login;
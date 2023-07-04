import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    let username =  useRef();
    let email =  useRef();
    let password =  useRef();
    let confirmPassword =  useRef();
    let phone =  useRef();
    let dob =  useRef();
    // let[verified , setverified] = useState(false);
    let navigate = useNavigate();
    
   
    let handleSignup = (e)=>{
        e.preventDefault();

        if(password.current.value!=confirmPassword.current.value)
        {
            alert("Password missmatch");
            return 
        }
        if( new Date() < new Date(dob.current.value)  )
        {
            alert("invalid dob");
            return
        }

        let newUser = {
            username: username.current.value ,
            email: email.current.value,
            password: password.current.value,
            phone:phone.current.value,
            dob:dob.current.value
        }

        localStorage.setItem("userdetails", "[]");
        let users=JSON.parse(localStorage.getItem("userdetails"));
        users.push(newUser );
        users=JSON.stringify(users);

        localStorage.setItem("userdetails", users);
            alert("Account has been created successfully");
            navigate("/login");
       
    }


    return ( 
        <div className="signup-cont">
            <section>
                <div className="containers">
                    <div className="sign-pic">
                        <img src="./images/b1.jpg" alt="" />
                    </div>

                    <div className="signup-box">
                        <h1>Signup</h1>
                        <hr />
                        <form onSubmit={handleSignup}>
                            <input type="text" placeholder="Username" ref={username} required />
                            <input type="email" placeholder="Email id" ref={email} required/>
                            <input type="password" placeholder="Password" ref={password} required />
                            <input type="password" placeholder="Confirm password" ref={confirmPassword} required />
                            <input type="tel" placeholder="Phone number" max="10" min="10" ref={phone} required />
                            <input type="date" ref={dob} required/>
                            <input type="submit" value="Signup"/>
                        </form>
    
                        <p>Already have an account ? <Link to="/login">Login</Link></p>
                 </div>
                </div>
            </section>
          
        </div>
     );
}
 
export default Signup;








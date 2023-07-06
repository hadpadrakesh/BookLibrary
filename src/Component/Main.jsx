import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main=()=>{

    const [search , setSearch] = useState("");
    const [bookData, setData] = useState([]);
    let navigator = useNavigate();

    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDOZHsyCznoCrZNgkE0rDkNIJuAeD8CEw0'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    let logout = ()=>{
        localStorage.removeItem("login");
        navigator("/")
    }


    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><Link to={`searchBook/${'AIzaSyDOZHsyCznoCrZNgkE0rDkNIJuAeD8CEw0'+'&maxResults=40'}`}></Link><i class='bx bx-search'></i></button>
                        <button id="logout" onClick={logout}>Logout</button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

           <div className="container">
            {
                 <Card book={bookData}/>
            }
               
           </div>
          
        </>
    )
}
export default Main;
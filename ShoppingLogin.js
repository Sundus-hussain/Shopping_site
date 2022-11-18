import { useState } from "react";
import{useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

function ShoppingLogin(){

    const[userName,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const [cookies,setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    function handleUserChange(e){
        setUsername(e.target.value);

    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function LoginClick(){
        if(password=='admin'){
            setCookie("username", userName,);
            navigate("/categories");
        }
        else {
            navigate("/error");
        }
    }

    return(
        <div>
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserChange}></input></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePasswordChange}></input></dd>
            </dl>
            <button className="btn btn-info" onClick={LoginClick}>Login</button>

        </div>
    )
}

export default ShoppingLogin;
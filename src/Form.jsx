import "./Form.css"
import { useState } from "react";
import axios from "axios";

function Form() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const clickHandler = () => {
        if(name.length > 0 && password.length > 0){
            //axios
            console.log('Done!');
            const url = "http://localhost:8080/addUser";
            const data = {
                name:name,
                password:password
            };
            axios.post(url, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((data)=>console.log(data));

        }else {
            alert('username and password required');
        }
        
    }

    return (
        <>
            <h1>Login here!</h1>
            <fieldset>
                <input 
                type = "text" id = "username" placeholder="Username" value={name} 
                onChange={nameHandler}/>
                <input type = "password" id = "password" placeholder="Password" value={password} onChange={passwordHandler}/>
                <button id="submit" onClick={clickHandler} style={{'cursor':'pointer'}}>Login</button>
                <a href="" style={{'textAlign':'center', 'display':'block', 'textDecoration':'none','paddingTop':'15px'}}>Forgot password?</a>
            </fieldset>
            
        </>
    )
}

export default Form;
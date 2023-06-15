import React from "react";

function UserForm(props){
    const firstNameHandler = (event) => {
        props.firstNameChange(event.target.value);
    }
    const lastNameHandler = (event) => {
        props.lastNameChange(event.target.value);
    }
    const emailHandler = (event) => {
        props.emailChange(event.target.value);
    }
    const saveHandler = (event) => {
        event.preventDefault();
        if (props.firstName.length > 0 && props.lastName.length > 0 && props.email.length > 0){
            props.saveUser();
        }else {
            alert("All fields required")
        }
    }
    const updateHandler = (event) => {
        event.preventDefault();
        props.updateUser();
    }
    
    return (
        <>
        <form className="form-inline mt-5">
            <label className="sr-only" htmlFor="inlineFormInputName2">firstName</label>
            <input 
                type="text" 
                className="form-control mb-2 mr-sm-2" 
                id="inlineFormInputName2" 
                placeholder="First name" 
                value={props.firstName} 
                onChange={firstNameHandler}/>

            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">lastName</label>
            <div className="input-group mb-2 mr-sm-2">
                <input 
                    type="text" 
                    className="form-control" 
                    id="inlineFormInputGroupUsername2" 
                    placeholder="Last name" 
                    value = {props.lastName} 
                    onChange={lastNameHandler}/>
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <input 
                    type="text" 
                    className="form-control" 
                    id="inlineFormInputGroupUsername2" 
                    placeholder="@gmail.com" 
                    value={props.email} 
                    onChange={emailHandler}/>
            </div>
            {props.showEdit === true ? 
            (<button className="btn btn-primary mb-2" onClick={updateHandler}>Edit</button>) 
            : (<button className="btn btn-primary mb-2" onClick={saveHandler}>Save</button>)}
            
            
        </form>
        </>
    );
}

export default UserForm;
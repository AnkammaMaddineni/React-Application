import React, { useState } from "react";
import Saveuser from "./UserForm";
import jsonData from '../assets/data.json';


function UserTable(props){

    const editHandler = (e, id) => {
        props.editUser(id);
    }
    const clearHandler = (e, id) => {
        props.clearUser(id);
    }

    const tableRows = props.userData.map((info) => {
        return (<tr key = {info.id}>
            <td>{info.id}</td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.email}</td>
            <td><button className="btn btn-primary mr-2" onClick={(event) => editHandler(event, info.id)}>Update</button>
            <button className="btn btn-danger" onClick={(event) => clearHandler(event, info.id)}>Delete</button></td>
          </tr>
        );
    })
    
    return(
        <>
        {(props.userData && props.userData.length > 0) ? (
            <table className="table mt-5">
            <thead className="thead-dark">
                <tr>
                <th scope="col">S.no</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
            
        </table>
        ): null }
        
        </>
    );
}
export default UserTable;
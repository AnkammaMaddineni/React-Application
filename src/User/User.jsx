import UserForm from './UserForm';
import UserTable from './UserTable';
import { useState } from 'react';

function User() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [userData, setUserData] = useState([]);
    const [showEdit, setshowEdit] = useState(false);
    const [id, setid] = useState('');
    // add new state type boolean

    const firstNameChange = (value) => {
        setfirstName(value);
    }
    const lastNameChange = (value) => {setlastName(value);}
    const emailChange = (value) => {setemail(value);}

    const clearState = () => {
        setfirstName('');
        setlastName('');
        setemail('')
    }

    const saveUser = () => {
        const totalUsers = userData.length;
        const values = {
            id: totalUsers + 1,
            firstName,
            lastName,
            email
        }
        const updatedUserData = [...userData];
        updatedUserData.push(values);
        setUserData(updatedUserData);
        clearState();
    }
    const editUser = (id) => {
        let userIndex = userData.find((user) => {
            return user.id === id
        });
        setfirstName(userIndex.firstName);
        setlastName(userIndex.lastName);
        setemail(userIndex.email);
        setshowEdit(true);
        setid(id);
    }
    const clearUser = (id) => {
        let users = userData.filter((user) => {
            return user.id !== id;
        });
        setUserData(users);
    }
    const updateUser = () => {
        let updatedUsers = userData.map((user) => {
            if (user.id === id){
                user.firstName = firstName;
                user.lastName = lastName;
                user.email = email;
            }
            return user;
        });
        setUserData(updatedUsers);
        clearState();
        setshowEdit(false);
        setid('');

    }

    return (
        <>
            <UserForm 
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                firstNameChange={firstNameChange} 
                lastNameChange={lastNameChange} 
                emailChange = {emailChange}
                saveUser={saveUser}
                showEdit = {showEdit}
                updateUser = {updateUser}
            />
            <UserTable userData={userData} editUser={editUser} clearUser= {clearUser}/>
        </>
    )
}

export default User;

import React from "react";
import { useState } from "react";

function Registration (){
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [country, setCountry] = useState('');
const [state, setState] = useState('');
const [gender, setGender] = useState('');

const firstnameHandler = (event) => {setFirstName(event.target.value);}
const lastnameHandler = (event) => {setLastName(event.target.value);}
const countryHandler = (event) => {setCountry(event.target.value);}
const stateHandler = (event) => {setState(event.target.value)}
const genderHnadler = (event) => {setGender(event.target.value)}

const clickHandler = (event) => {
    event.preventDefault();
    if (firstname.length > 0 && lastname.length > 0){
        console.log('firstname', firstname, 'lastname', lastname, 'country', country, 'state', state, 'gender', gender);
    }
    else{
        alert('Everything need to be filled');
    }
}
    const countryList = ['Australia', 'India', 'United States'];
    const countriesOptions = () => {
        //let options = [];
        let options = countryList.map((country) => {
            return (
                <option value={country} key={country}>{country}</option>
            )
        });
        return options;

    }
    const stateList = [['AustraliaState1', 'AustraliaState2'], ['Delhi', 'Telangana', 'Andhra Pradesh'], ['Texas', 'NC', 'Albama']]
    const stateOptions = () => {
        //let options = [];
        let countryIndex = countryList.indexOf(country);
        if(countryIndex >= 0) {
            let stateListValues = stateList[countryIndex];
            let options = stateListValues.map((state) => {
                return (
                    <option value={state} key={state}>{state}</option>
                )
            });
            return options;
        }
        else {
            return null;
        }
    }
    
    return (
        <>
        <form>
  <div className="form-group">
    <label>First Name</label>
    <input type="text" className="form-control" id="firstname" value={firstname} onChange={firstnameHandler}/>
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" className="form-control" id="lastname" value={lastname} onChange={lastnameHandler} />
  </div>
  <div className="form-group">
    <label>Country</label>
    <select className="form-control" id = "country" value={country} onChange={countryHandler}>
        <option value="default">--Select--</option>
        {countryList.map((country) => {
            return (
                <option value={country} key={country}>{country}</option>
            )
        })}
        {/* <option>--Select--</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Brazil">Brazil</option>
        <option value="India">India</option>
        <option value="UnitedStates">United States</option> */}
    </select>
  </div>
  <div className="form-group">
    <label>State</label>
        <select className="form-control" value={state} onChange={stateHandler}>
        <option>--Select--</option>
        {stateOptions()}
        {/* <option value="Albama">Albama</option>
        <option value="Texas">Texas</option>
        <option value="Tennesse">Tennesse</option>
        <option value="New York">New York</option>
        <option value="Michigan">Michigan</option> */}
    </select>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value='male' onChange={genderHnadler} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" onChange={genderHnadler}/>
  <label className="form-check-label" htmlFor="exampleRadios2">
    Female
  </label>
</div>

  <button type="submit" className="btn btn-primary" onClick={clickHandler}>Submit</button>
</form>
        </>
        
    )
}
export default Registration;
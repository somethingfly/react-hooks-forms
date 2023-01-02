// src/components/ParentComponent
import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);

    function handleNumberChange(event) {
      const newNumber = parseInt(event.target.value);
      if (newNumber >= 0 && newNumber <= 5) {
        setNumber(newNumber);
        setIsInvalidNumber(null);
      } else {
       setIsInvalidNumber(`${newNumber} is not a valid number!`);
      }
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            /> 
            <form>
                <input type="number" value={number} onChange={handleNumberChange} />
                {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
            </form>
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default ParentComponent;

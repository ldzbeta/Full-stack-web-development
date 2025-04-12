import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const [heading, setHeading] = useState("");
  function getinput1(event) {
    setName1(event.target.value);
  }
  function getinput2(event) {
    setName2(event.target.value);
  }

  function clickHandler(event) {
    setHeading(name1 + " " + name2);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={clickHandler}>
        <input name="fName" placeholder="First Name" onChange={getinput1} />
        <input name="lName" placeholder="Last Name" onChange={getinput2} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// ---------------------------------  ---------------------------------

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      //these functions can store the previous value of stored data  and there for it can be used as input function
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// ---------------------------------  ---------------------------------

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

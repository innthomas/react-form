import React,{useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    gender: "",
    message: "",
  })
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <div>

      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name:{""} 
          <input type="text" name="fname" value={state.fname} onChange={handleChange}/>
        </label>{""}
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <br /><br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />
{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />
{" "}
        Female
      </label>
      {/* email */}
      <br/>
      <label>
          email:{" "}
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        {/* address */}
        <br/>
      <label>
          address:{" "}
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </label>

        <br />
      <label>
        Bio:{" "}
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>
      </form>
      </div>
      <div>
      <h5>Name: {state.fname} {state.lname}</h5>
      <h5>Gender Selected : {state.gender}</h5>
      <h5>email: {state.email}</h5>
      <h5>address: {state.address}</h5>
      <p>Bio: {state.message}</p>
      </div>
    </div>
  )
}

export default App
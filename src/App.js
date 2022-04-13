import React,{useState} from 'react';
import './App.css';

function App() {
  const [submit,setSubmit] = useState(false);
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    gender: "",
    message: "",
  })
  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(true)
  }
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='container'>
      <div className={submit ?'form-container remove-container':'form-container'}>

      <h2>React Form Handling</h2>
      <form className='form'>
        <div className=' form-control name'>

        <label>
          First Name:{""} 
          <input type="text" name="fname" value={state.fname} onChange={handleChange}/>
        </label>{""}
        <br/>
        </div>
        <div className=' form-control name'>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
            />
        </label>
            </div>
        <br />
        <div className='form-control'>
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
      </div>
      {/* email */}
      <br/>
      <div className='form-control'>

      <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            />
        </label>
            </div>
        {/* address */}
        <br/>
        <div className='form-control'>
      <label>
          Address:{" "}
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </label>
            </div>

        <br />
        <div className='form-control'>
      <label>
        Bio:{" "}<br/>
        <textarea
        rows="4" 
        cols="35"
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className="btn">
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      </form>
      </div>
      <div className='data-container'>
      <h2>Output Data</h2>
      <h5 className='data'><span className='data-title'>Full Name</span>: {state.fname} {state.lname}</h5>
      <h5 className='data'><span className='data-title'>Gender</span>: {state.gender}</h5>
      <h5 className='data'><span className='data-title'>Email</span>: {state.email}</h5>
      <h5 className='data'><span className='data-title'>Address</span>: {state.address}</h5>
      <div>
      <h4 className='data-title'>Bio</h4>
      <p className='data'>{state.message}</p>
      </div>
      </div>
    </div>
  )
}

export default App
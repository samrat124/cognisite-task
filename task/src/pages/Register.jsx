import React from 'react'

const Register = () => {
    const[inputs,setinputs]=useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
        
      }
  return (
    <div>
        <form   onSubmit={handleSubmit}>
            <input name='name' type="text" placeholder='Name' onChange={handleChange}/>
            <input name='number' type="number" placeholder='Mobile Number' onChange={handleChange} />
            <input name='passwword' type="password" placeholder='Password' onChange={handleChange} />
        </form>
    </div>
  )
}

export default Register
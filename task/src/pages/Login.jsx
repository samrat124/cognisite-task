import React from 'react'

const Login = () => {
    const[inputs,setinputs]=useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        let res=await fetch('http://localhost:5000/user');
        let data=await res.json();
        data.filter((ele)=>{
            if(inputs.number==ele.number&&inputs.password==ele.password){
                return true
            }
            else{
                alert('wrong id or password')
            }
        })
        
      }
  return (
    <div>
        <form   onSubmit={handleSubmit}>
             
            <input name='number' type="number" placeholder='Mobile Number' onChange={handleChange} />
            <input name='passwword' type="password" placeholder='Password' onChange={handleChange} />
        </form>
    </div>
  )
}

export default Login
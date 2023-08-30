import React,{useState} from 'react'


function General() {
 const[first,setFirst]=useState('');
 const[last,setLast]=useState('');
 const[email,setEmail]=useState('');
 const[phone,setPhone]=useState('');
 
 const[loaded,setLoaded]=useState(false);

 const handleClear = (e)=>{
  setLast('');
  setEmail('');
  setFirst('');
  setPhone('');
 }

 const handleClick = (e)=>{
  setLoaded(true);
 }

 if(loaded){
  return (
    <div className='loaded text-center'>
      <h1>General information</h1>
    <p>Name: {first} {last}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    </div>
    
  )
  }
  return (
    <div className='General'>
      <div className='container border border-light-subtle rounded shadow-lg p-5 mb-5'>
      <h2>General infomation</h2>
      <form onSubmit={(e)=>(e.preventDefault())}>
        <div className='row'>
          <div className='col-sm-3'>
         
      <label> First Name {''}</label>
      <input type='text' value={first} onChange={(e)=>(setFirst(e.target.value))}/><br/>

      <label> Last Name {''}</label>
      <input type='text' value={last} onChange={(e)=>(setLast(e.target.value))}/><br/>

      <label> Email address {''}</label>
      <input type='text' value={email}  onChange={(e)=>(setEmail(e.target.value))}/><br/>

      <label>phone number {''}</label>
      <input type='text' value={phone}  onChange={(e)=>(setPhone(e.target.value))}/><br/>

          </div>
        </div>
        <button type='submit'className='border shadow-lg btn btn-dark m-4' onClick={handleClear}>Edit</button>

      <button type='submit'className='border shadow-lg btn btn-dark m-4'onClick={handleClick}>Submit</button>
      
        </form>

      </div>
    </div>
  )
}

export default General
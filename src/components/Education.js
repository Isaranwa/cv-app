import React,{useState} from 'react'

function Education() {
    const[school,setSchool]=useState('');
    const[title,setTitle]=useState('');
    const[startDate,setStartDate]=useState('');
    const[endDate,setEndDate]=useState('');

    const[loaded,setLoaded]=useState(false);

    const handleClear = (e)=>{
        setEndDate('');
        setStartDate('');
        setSchool('');
        setTitle('');
    }

    const handleClick = (e)=>{
        setLoaded(true);
    }

    if(loaded){
        return (
            <div className='loaded text-center'>
                <h1>Education</h1>
                <p>School:{school}</p>
                <p>Title of Study:{title}</p>
                <p>Start date:{startDate}</p>
                <p>End date:{endDate}</p>
            </div>
        )
    }
  return (
    <div className='Education'>
        <div className='container border border-light-subtle rounded shadow-lg p-5 mb-5'>
            <h2>Education</h2>
            <form onSubmit={(e)=>(e.preventDefault())}>
                <div className='row'>
                    <div className='col-sm-4'>
                    <label>School Name</label>
                    <input type='text' value={school}onChange={(e)=>setSchool(e.target.value)} />
                    </div>
                    <label>Title of study</label>
                    <input type='text'value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Start date</label>
                    <input type='date' value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                    <label>End date</label>
                    <input type='date'value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                </div>
                <button type='submit'className='border shadow-lg btn btn-dark m-4' onClick={handleClear}>Edit</button>

                <button type='submit'className='border shadow-lg btn btn-dark m-4'onClick={handleClick}>Submit</button>
                
            </form>
        </div>
    
    </div>
  )
}

export default Education
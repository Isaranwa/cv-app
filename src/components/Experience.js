import React,{useState} from 'react'

function Experience() {
    const[company,setCompany]=useState('');
    const[title,setTitle]=useState('');
    const[duty,setDuty]=useState('');
    const[startDate,setStartDate]=useState('');
    const[endDate,setEndDate]=useState('')

    const[loaded,setLoaded]=useState(false);

    const handleClear = (e)=>{
        setCompany('');
        setDuty('');
        setEndDate('');
        setStartDate('');
        setTitle('');
    }

    const handleClick = (e)=>{
        setLoaded(true);
    }

    if(loaded){
        return(
            <div className='loaded text-center'>
                <h1>Experience</h1>
                <p>Company Name:{company}</p>
                <p>Position:{title}</p>
                <p>Responsibilitie(s):{duty}:</p>
                <p>startDate:{startDate}</p>
                <p>endDate:{endDate}</p>
            </div>
        )
    }
  return (
    <div className='Experience'>
        <div className='container border border-light-subtle rounded shadow-lg p-5 mb-5'>
        <h2>Experience</h2>
        <form onSubmit={(e)=>(e.preventDefault())}>
                <div className='row'>
                    <div className='col-sm-4'>
                    <label>Company Name</label>
                    <input type='text' value={company}onChange={(e)=>setCompany(e.target.value)} />
                    </div>
                    <label>Position/Title</label>
                    <input type='text'value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Responsibilities</label>
                    <input type='text'value={duty} onChange={(e)=>setDuty(e.target.value)}/>
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

export default Experience
import React from 'react'
import {useState, useEffect} from 'react'
import './Name.css'


const Name =() => {

    const [searchMyData, setSearchMyData] = useState("")

      const searchData = (e) =>{
        setSearchMyData(e.target.value.toLowerCase())
      
      }



    const [resultData, setResultData] = useState([])
  useEffect(()=>{
    fetch('https://655f3af6879575426b44e15c.mockapi.io/task')
    .then(res=>res.json())
    .then(data=>{
      setResultData(data)
    })
   
  },[])
  return (
    <div className='car'>
        <input type='text' placeholder='search' onChange={searchData}/>
<div className="all">
    
{
      resultData.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a,b)=>(
        <div key={b} className='card'>
        <img style={{width:"200px"}} src={a.avatar} alt=''/>
        <h2>{a.name}</h2>
        
      </div>
      
      ))
    }
</div>

    </div>
  )
}

export default Name
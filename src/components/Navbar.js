import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth, db } from '../firebase'
import { getDoc, collection,getDocs } from 'firebase/firestore'


// import '../navbar.css'
export default function Navbar({ user,onTermChange }) {
  const navigate = useNavigate()
  // const [term,setTerm]=useState('')
  const submitted=async()=>{
    const snapshot=await getDocs(collection(db,'recipe10','7gAvI3RggUkeGxf7YE5Y'))
    console.log(snapshot.data)
  }
  const refreshPage=()=>{
    window.location.reload();
} 
  return (
    <div className="ui secondary  menu" >
      <Link  to='/home' className="active item">
        Home
      </Link>
      <Link  to='/new' className="item">
        New
      </Link>
      <Link to='/recommended' className="item">
        Recommended
      </Link>
      <Link to='/contribute' className="item">
        Contribute
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <form onSubmit={submitted}>
            <input type="text" onChange={(e)=>onTermChange(e.target.value)} placeholder="Search..." />
            <button type='submit'><i className="search icon"></i></button>
            </form>
          </div>
        </div>
        <Link to='/'><button className="ui mini red button" style={{padding:'10px',margin:'10px'}} onClick={()=>{
                    auth.signOut(); window.location.replace('/')
                }}>Log out</button></Link>
      </div>
      
    </div>
  )
}


import React,{useState} from 'react'
import {auth} from '../firebase'
import {Link, useNavigate} from 'react-router-dom'
// import { useEffect } from 'react'

export default function Login({user}) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const result=await auth.signInWithEmailAndPassword(email,password)
            navigate('/home')
        }catch(err){
            <div>{err.message}</div>
        }
    }
    console.log(user);
    
  return (
    <div>
    {
      !user?
        <>
            <div className="ui one column stackable center aligned page grid">
            <div className="column eight wide">
                <form className="ui form" onSubmit={(e)=>handleSubmit(e)} >
                    <div className="ui hidden divider"></div>
                    <h1 className="ui dividing header">Log In</h1>
                    <div className="field">
                        <input  name="userEmail" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                    </div>
                    <div className="field">
                        <input name="userPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                    </div>
                    <div className="ui hidden divider"></div>
                    <button className="fluid ui primary button" type="submit">Log In</button>
                    <div className="ui m">
                      New to us? <Link to="/sign">Sign Up</Link>
                  </div>
                </form>
            </div>
        </div>
        </>
        :
        navigate('/home')       
    }
    </div>
  )
}

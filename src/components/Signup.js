import React,{useState} from 'react'
import {auth} from '../firebase'
import {Link,useNavigate} from 'react-router-dom'

//Enable authentication for email and password in firebase console
export default function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const result=await auth.createUserWithEmailAndPassword(email,password)
            navigate('/home')
        }catch(err){
            <div>Error</div>
        }
        
    }
  return (
    <div className="ui one column stackable center aligned page grid">
        <div className="column eight wide">
            <form className="ui form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="ui hidden divider"></div>
                <h1 className="ui dividing header">Sign In</h1>
                 <div className="field">
                    <input  name="userEmail" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                </div>
                <div className="field">
                    <input name="userPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                </div>
                <div className="ui hidden divider"></div>
                <button className="fluid ui primary button" type="submit">Sign In</button>
                <div className="ui m">
                   Already a member <Link to="/">Log In</Link>
               </div>
            </form>
        </div>
    </div>
  )
}

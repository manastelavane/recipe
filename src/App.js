import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Todo from './components/Todo'
import Login from './components/Login'
import Signup from './components/Signup'
import { useEffect, useState } from 'react'
import {auth} from './firebase'
import New from '../src/components/New'
import Recommended from '../src/components/Recommended'
import Recipe from './components/Recipe'
import useVideos from './hooks/useVideos';
// import Login_Signup from './components/Login_Signup'

const App = () => {

  const [user,setUser]=useState(null)
  const [selectedRecipe,setSelectedRecipe]=useState([])
  const [videos,search]=useVideos('pav bhaji recipe english')
  // useEffect(()=>{
  //   setSelectedRecipe(videos[0]);
  // },[videos])
  useEffect(()=>{
    console.log(selectedRecipe);
  },[selectedRecipe])
  useEffect(()=>{
    const unsubscibe = auth.onAuthStateChanged(user=>{
        if(user){
            setUser(user)
            console.log(user);
        }else{
            setUser(null)
        }
    })
    unsubscibe();
  },[])
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/contribute" element={<Todo user={user}/>} />
            {/* <Route path="/login" element={<Login_Sign />}/> */}
            <Route path="/sign" element={<Signup />}/>
            <Route path="/" element={<Login user={user}/>}/>
            <Route path="/home" element={<Home onRecipeSelect={(recipe)=>{setSelectedRecipe(recipe);search(recipe.details.recipename)}}/>}/>
            <Route path="/new" element={<New />}/>
            <Route path="/recommended" element={<Recommended />}/>
            <Route path="/recipe" element={<Recipe selectedRecipe={selectedRecipe} videos={videos} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

//For Hosting
//GO to hosting on firebase console
//npm install -g firebase-tools
//write in terminal-firebase login and give answers
//write in terminal-firebase init and give answers as y,select hosting ,select existing project,SELECT YOUR PROJECT,build,Yes,No
//npm run build
//firebase deploy --only hosting

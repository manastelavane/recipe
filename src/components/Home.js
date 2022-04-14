import { collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { useEffect, useCallback  } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import Card from './Card'
import Navbar from './Navbar'
import SearchBar from './Search'

import RecipeBox from './RecipeBox'
import { useNavigate } from 'react-router-dom'
const Home = ({user,onRecipeSelect}) => {
  // const [selected]  
  const [term,setTerm]=useState('')
  const [bookmark, setBookmark] = useState([])
  const [recipe,setRecipe]=useState([])
  const [searchResult,setSearchResult]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    if( term!=""){
      const newList=bookmark.filter((recipe)=>{
        return Object.values(recipe).join(" ").toLowerCase().includes(term.toLowerCase())
      })
      setSearchResult(newList)
    }else{
      setSearchResult(bookmark)
    }
  },[term])
  
  useEffect(() => {
    onSnapshot(collection(db, 'recipe10'), (snapshot) => {
      setBookmark(snapshot.docs.map(doc => doc.data()))
    }, []);

  }, [])
 
  // useEffect(()=>{
  //   console.log(term);
  // },[term])
  const searchHandler=()=>{}
  return (
    <>
      <Navbar onTermChange={(term)=>setTerm(term)}/>
      {
        bookmark&&
        <RecipeBox term={term} bookmark={term.length<1?bookmark:searchResult} onRecipeSelect={onRecipeSelect} searchkeyword={searchHandler}/>
      }
    </>
  )
}

export default Home

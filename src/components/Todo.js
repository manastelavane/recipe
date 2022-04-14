import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { db } from '../firebase'
import {doc,setDoc} from 'firebase/firestore'
import Navbar from './Navbar'
import './Card.css'
// import '../TryFormBootstrap.css'
// let unsubscribe=()=>{}

export default function Todo({user}) {
    const [text,setText]=useState('')
    const [mytodos,setTodos]=useState([])
    const [vegNon,setVegNon]=useState('Veg')
//   const [ingcount,setIngcount]=useState(0)
//   const [reccount,setReccount]=useState(0)
//   const [fats,setFats]=useState('')
  const [recipename,setRecipename]=useState('');
  const [image,setImage]=useState('');
  const [statereg,setStatereg]=useState('')
//   const [vegnon,setVegnon]=useState('');
  const [calories,setCalories]=useState(null);
  const [vegan,setVegan]=useState('false');
  const [glutenfree,setGlutenfree]=useState('false');
  const [fats,setFats]=useState(null);
  const [proteins,setProteins]=useState(null);
  const [carbohydrates,setCarbohydrates]=useState(null);
  const [servings,setServings]=useState(null);
  const [priceperserving,setPriceperserving]=useState(null);
  const [timetocook,setTimetocook]=useState(null);
  const [healthscore,setHealthscore]=useState(null);
  const [ingcount,setIngcount]=useState(null);
  const [reccount,setReccount]=useState(null);
  const [step1,setStep1]=useState(null);
  const [step2,setStep2]=useState(null);
  const [step3,setStep3]=useState(null);
  const [step4,setStep4]=useState(null);
  const [step5,setStep5]=useState(null);
  const [step6,setStep6]=useState(null);
  const [step7,setStep7]=useState(null);
  const [step8,setStep8]=useState(null);
  const [step9,setStep9]=useState(null);
  const [step10,setStep10]=useState(null);
  const [step11,setStep11]=useState(null);
  const [step12,setStep12]=useState(null);
  const [step13,setStep13]=useState(null);
  const [step14,setStep14]=useState(null);
  const [step15,setStep15]=useState(null);
  const [ing1n,setIng1n]=useState(null);
  const [ing1u,setIng1u]=useState(null);
  const [ing1a,setIng1a]=useState(null);
  const [ing1un,setIng1un]=useState(null);
  const [ing2n,setIng2n]=useState(null);
  const [ing2u,setIng2u]=useState(null);
  const [ing2a,setIng2a]=useState(null);
  const [ing2un,setIng2un]=useState(null);
  const [ing3n,setIng3n]=useState(null);
  const [ing3u,setIng3u]=useState(null);
  const [ing3a,setIng3a]=useState(null);
  const [ing3un,setIng3un]=useState(null);
  const [ing4n,setIng4n]=useState(null);
  const [ing4u,setIng4u]=useState(null);
  const [ing4a,setIng4a]=useState(null);
  const [ing4un,setIng4un]=useState(null);
  const [ing5n,setIng5n]=useState(null);
  const [ing5u,setIng5u]=useState(null);
  const [ing5a,setIng5a]=useState(null);
  const [ing5un,setIng5un]=useState(null);
  const [ing6n,setIng6n]=useState(null);
  const [ing6u,setIng6u]=useState(null);
  const [ing6a,setIng6a]=useState(null);
  const [ing6un,setIng6un]=useState(null);
  const [ing7n,setIng7n]=useState(null);
  const [ing7u,setIng7u]=useState(null);
  const [ing7a,setIng7a]=useState(null);
  const [ing7un,setIng7un]=useState(null);
  const [ing8n,setIng8n]=useState(null);
  const [ing8u,setIng8u]=useState(null);
  const [ing8a,setIng8a]=useState(null);
  const [ing8un,setIng8un]=useState(null);
  const [ing9n,setIng9n]=useState(null);
  const [ing9u,setIng9u]=useState(null);
  const [ing9a,setIng9a]=useState(null);
  const [ing9un,setIng9un]=useState(null);
  const [ing10n,setIng10n]=useState(null);
  const [ing10u,setIng10u]=useState(null);
  const [ing10a,setIng10a]=useState(null);
  const [ing10un,setIng10un]=useState(null);
  const [ing11n,setIng11n]=useState(null);
  const [ing11u,setIng11u]=useState(null);
  const [ing11a,setIng11a]=useState(null);
  const [ing11un,setIng11un]=useState(null);
  const [ing12n,setIng12n]=useState(null);
  const [ing12u,setIng12u]=useState(null);
  const [ing12a,setIng12a]=useState(null);
  const [ing12un,setIng12un]=useState(null);
  const [ing13n,setIng13n]=useState(null);
  const [ing13u,setIng13u]=useState(null);
  const [ing13a,setIng13a]=useState(null);
  const [ing13un,setIng13un]=useState(null);
  const [ing14n,setIng14n]=useState(null);
  const [ing14u,setIng14u]=useState(null);
  const [ing14a,setIng14a]=useState(null);
  const [ing14un,setIng14un]=useState(null);
  const [ing15n,setIng15n]=useState(null);
  const [ing15u,setIng15u]=useState(null);
  const [ing15a,setIng15a]=useState(null);
  const [ing15un,setIng15un]=useState(null);
//   const [vegan,setVegan]=useState('false')
//   const [glutenfree,setGlutenfree]=useState('false')
  const vegtog=()=>{vegan==='false'?setVegan('true'):setVegan('false')};
  const glutog=()=>{glutenfree==='false'?setGlutenfree('true'):setGlutenfree('false')};
//   let name,value;
//   const (e)=>setRecipename(e.target.value)=(event)=>{
//       name=event.target.name;
//       value=event.target.value;
//       setUsera({...usera,[name]:value});
//   }
let unsubscribe=()=>{}
    const navigate=useNavigate()
    useEffect(()=>{
        if(user){
            const docRef=db.collection('todos').doc(user.uid)
            console.log(docRef)
            unsubscribe=docRef.onSnapshot(docSnap=>{
                if(docSnap.exists){
                    console.log(docSnap.data().todos)
                    console.log(docSnap.data())
                    setTodos(docSnap.data().todos)
                }
            })
        }else{
            navigate('/')
        }
        return()=>{
            unsubscribe()
        }
    },[])
    const addTodo=async()=>{
        // const { recipename,image,calories,fats,proteins,carbohydrates,servings,priceperserving,timetocook,healthscore,statereg,ing1n,ing1u,ing1a,ing1un,ing2n,ing2u,ing2a,ing2un,ing3n,ing3u,ing3a,ing3un,ing4n,ing4u,ing4a,ing4un,ing5n,ing5u,ing5a,ing5un,ing6n,ing6u,ing6a,ing6un,ing7n,ing7u,ing7a,ing7un,ing8n,ing8u,ing8a,ing8un,ing9n,ing9u,ing9a,ing9un,ing10n,ing10u,ing10a,ing10un,ing11n,ing11u,ing11a,ing11un,ing12n,ing12u,ing12a,ing12un,ing13n,ing13u,ing13a,ing13un,ing14n,ing14u,ing14a,ing14un,ing15n,ing15u,ing15a,ing15un,step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,step12,step13,step14,step15}=user;
        // await setDoc(doc(db, 'recipe10'),{
        db.collection('recipe10').doc().set({
        details:{
            recipename:recipename,
            image:image,
            vegNon:vegNon,
            statereg:statereg,
            calories:calories,
            vegan:vegan,
            glutenfree:glutenfree,
            fats:fats,
            proteins:proteins,
            carbohydrates:carbohydrates,
            servings:servings,
            priceperserving:priceperserving,
            timetocook:timetocook,
            healthscore:healthscore,
        },
        ingredients:{
            ing1:{
                ing1n:ing1n,
                ing1u:ing1u,
                ing1a:ing1a,
                ing1un:ing1un,
            },
            ing2:{
                ing2n:ing2n,
                ing2u:ing2u,
                ing2a:ing2a,
                ing2un:ing2un,
            },
            ing3:{
                ing3n:ing3n,
                ing3u:ing3u,
                ing3a:ing3a,
                ing3un:ing3un,
            },
            ing4:{
                ing4n:ing4n,
                ing4u:ing4u,
                ing4a:ing4a,
                ing4un:ing4un,
            },
            ing5:{
                ing5n:ing5n,
                ing5u:ing5u,
                ing5a:ing5a,
                ing5un:ing5un,
            },
            ing6:{
                ing6n:ing6n,
                ing6u:ing6u,
                ing6a:ing6a,
                ing6un:ing6un,
            },
            ing7:{
                ing7n:ing7n,
                ing7u:ing7u,
                ing7a:ing7a,
                ing7un:ing7un,
            },
            ing8:{
                ing8n:ing8n,
                ing8u:ing8u,
                ing8a:ing8a,
                ing8un:ing8un,
            },
            ing9:{
                ing9n:ing9n,
                ing9u:ing9u,
                ing9a:ing9a,
                ing9un:ing9un,
            },
            ing10:{
                ing10n:ing10n,
                ing10u:ing10u,
                ing10a:ing10a,
                ing10un:ing10un,
            },
            ing11:{
                ing11n:ing11n,
                ing11u:ing11u,
                ing11a:ing11a,
                ing11un:ing11un,
            },
            ing12:{
                ing12n:ing12n,
                ing12u:ing12u,
                ing12a:ing12a,
                ing12un:ing12un,
            },
            ing13:{
                ing13n:ing13n,
                ing13u:ing13u,
                ing13a:ing13a,
                ing13un:ing13un,
            },
            ing14:{
                ing14n:ing14n,
                ing14u:ing14u,
                ing14a:ing14a,
                ing14un:ing14un,
            },
            ing15:{
                ing15n:ing15n,
                ing15u:ing15u,
                ing15a:ing15a,
                ing15un:ing15un,
            },
        },
        steps:{
            step1:step1,
        step2:step2,
        step3:step3,
        step4:step4,
        step5:step5,
        step6:step6,
        step7:step7,
        step8:step8,
        step9:step9,
        step10:step10,
        step11:step11,
        step12:step12,
        step13:step13,
        step14:step14,
        step15:step15,
        }
        })
    }
    const deleteTodo=(deleteTodo)=>{
        const docRef=db.collection('todos').doc(user.uid)
        console.log(docRef)
        console.log(docRef)
        console.log(docRef)
        console.log(docRef.get())
        console.log()
        docRef.get().then(docSnap=>{
            const result=docSnap.data().todos.filter(todo=>todo!=deleteTodo)
            docRef.update({
                todos:result
            })
        })
    }
  return (
    <div className='maindiv'>
        <Navbar/>
        <div className='form'>
        <h1 className="ui center aligned header" style={{ textShadow: '1px 1px' }}>Contribute Your Recipe</h1>
            <form className='ui form' onSubmit={()=>addTodo()}>
            <div className="field formmar ">
                <label htmlFor="recipename" >Recipe Name</label>
                <input onChange={(e)=>setRecipename(e.target.value)}  className="validate" value={recipename} id="recipename" type="text" name="recipename"  />
                
            </div>
            <div className="field formmar formmar">
                <label htmlFor="image" >Image URL</label>
                <input onChange={(e)=>setImage(e.target.value)} className="validate" value={image}  id="image" type="text" name="image" />
                
            </div>
            <br></br>
            <div className='inline fields'>
                <label htmlFor="recipetype">Recipe Type:</label>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" onClick={()=>{setVegNon('Veg')}} name="recipetype" />
                        <label>Veg</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" onClick={()=>{setVegNon('Veg')}} name="recipetype" />
                        <label>Non-Veg</label>
                    </div>
                </div>
                
            </div>
            <div className="field formmar">
                <label htmlFor="calories" className='placeholder'>Calories</label>
                <input step="any" className="validate" onChange={(e)=>setCalories(e.target.value)} value={calories} id="calories" type="number" name="calories" />
                
            </div>
            <div className="ui toggle checkbox">
                <input type="checkbox" onChange={vegtog} name="vegan"/>
                <label>
                Vegan
                </label>
            </div>
            <br/>
            <div className="ui toggle checkbox">
                <input type="checkbox" onChange={glutog} name="glutenfree"/>
                <label>
                GlutenFree
                </label>
            </div>
            
            <div className="field formmar">
                <label htmlFor="fats">Fats</label>
                <input step="any" className="validate" onChange={(e)=>setFats(e.target.value)} value={fats} id="fats" type="number" name="fats" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="proteins">Proteins</label>
                <input step="any" className="validate" onChange={(e)=>setProteins(e.target.value)} value={proteins} id="proteins" type="number" name="proteins" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="carbohydrates">Carbohydrates</label>
                <input step="any" className="validate" onChange={(e)=>setCarbohydrates(e.target.value)} value={carbohydrates} id="carbohydrates" type="number" name="carbohydrates" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="statereg">Region</label>
                <input step="any" className="validate" onChange={(e)=>setStatereg(e.target.value)} value={statereg} id="statereg" type="text" name="statereg" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="servings">Servings</label>
                <input step="any" className="validate" onChange={(e)=>setServings(e.target.value)} value={servings} id="servings" type="number" name="servings" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="priceperserving">Price Per Serving</label>
                <input step="any" className="validate" onChange={(e)=>setPriceperserving(e.target.value)} value={priceperserving} id="priceperserving" type="number" name="priceperserving" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="timetocook">Time To Cook</label>
                <input step="any" className="validate" onChange={(e)=>setTimetocook(e.target.value)} value={timetocook} id="timetocook" type="number" name="timetocook" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="healthscore">Health Score (Out of 100)</label>
                <input step="any" className="validate" onChange={(e)=>setHealthscore(e.target.value)} value={healthscore} id="healthscore" type="number" name="healthscore" />
                
            </div>
            <div className="field formmar">
                <label htmlFor="ingcount">Total Ingredients (Max 15)</label>
                <input step="any" value={ingcount} id="ingcount" min="1" max="15" type="number" className="validate" onChange={(e)=>setIngcount(e.target.value)} name="ingcount" />
                
            </div>
            <div className={ingcount>=1?"field formmar":"hide"}>
                <label htmlFor="ing1n">Ingredient 1 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng1n(e.target.value)} value={ing1n} id="ing1n" type="text" name="ing1n" />
                
            </div>
            <div className={ingcount>=1?"field formmar":"hide"}>
                <label htmlFor="ing1u">Ingredient 1 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng1u(e.target.value)} value={ing1u} id="ing1u" type="text" name="ing1u" />
                
            </div>
            <div className={ingcount>=1?"field formmar":"hide"}>
                <label htmlFor="ing1a">Ingredient 1 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng1a(e.target.value)} value={ing1a} id="ing1a" type="text" name="ing1a" placeholder= " "/>
                
            </div>
            <div className={ingcount>=1?"field formmar":"hide"}>
                <label htmlFor="ing1un">Ingredient 1 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng1un(e.target.value)} value={ing1un} id="ing1un" type="text" name="ing1un" />
                
            </div>
            <div className={ingcount>=2?"field formmar":"hide"}>
                <label htmlFor="ing2n">Ingredient 2 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng2n(e.target.value)} value={ing2n} id="ing2n" type="text" name="ing2n" />
                
            </div>
            <div className={ingcount>=2?"field formmar":"hide"}>
                <label htmlFor="ing2u"className='placeholder'>Ingredient 2 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng2u(e.target.value)} value={ing2u} id="ing2u" type="text" name="ing2u" />
                
            </div>
            <div className={ingcount>=2?"field formmar":"hide"}>
                <label htmlFor="ing2a"className='placeholder'>Ingredient 2 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng2a(e.target.value)} value={ing2a} id="ing2a" type="text" name="ing2a" />
                
            </div>
            <div className={ingcount>=2?"field formmar":"hide"}>
                <label htmlFor="ing2un"className='placeholder'>Ingredient 2 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng2un(e.target.value)} value={ing2un} id="ing2un" type="text" name="ing2un" />
                
            </div>
            <div className={ingcount>=3?"field formmar":"hide"}>
                <label htmlFor="ing3n"className='placeholder'>Ingredient 3 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng3n(e.target.value)} value={ing3n} id="ing3n" type="text" name="ing3n" />
                
            </div>
            <div className={ingcount>=3?"field formmar":"hide"}>
                <label htmlFor="ing3u"className='placeholder'>Ingredient 3 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng3u(e.target.value)} value={ing3u} id="ing3u" type="text" name="ing3u" />
                
            </div>
            <div className={ingcount>=3?"field formmar":"hide"}>
                <label htmlFor="ing3a"className='placeholder'>Ingredient 3 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng3a(e.target.value)} value={ing3a} id="ing3a" type="text" name="ing3a" />
                
            </div>
            <div className={ingcount>=3?"field formmar":"hide"}>
                <label htmlFor="ing3un"className='placeholder'>Ingredient 3 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng3un(e.target.value)} value={ing3un} id="ing3un" type="text" name="ing3un" />
                
            </div>
            <div className={ingcount>=4?"field formmar":"hide"}>
                <label htmlFor="ing4n"className='placeholder'>Ingredient 4 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng4n(e.target.value)} value={ing4n} id="ing4n" type="text" name="ing4n" />
                
            </div>
            <div className={ingcount>=4?"field formmar":"hide"}>
                <label htmlFor="ing4u"className='placeholder'>Ingredient 4 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng4u(e.target.value)} value={ing4u} id="ing4u" type="text" name="ing4u" />
                
            </div>
            <div className={ingcount>=4?"field formmar":"hide"}>
                <label htmlFor="ing4a"className='placeholder'>Ingredient 4 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng4a(e.target.value)} value={ing4a} id="ing4a" type="text" name="ing4a" />
                
            </div>
            <div className={ingcount>=4?"field formmar":"hide"}>
                <label htmlFor="ing4un"className='placeholder'>Ingredient 4 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng4un(e.target.value)} value={ing4un} id="ing4un" type="text" name="ing4un" />
                
            </div>
            <div className={ingcount>=5?"field formmar":"hide"}>
                <label htmlFor="ing5n"className='placeholder'>Ingredient 5 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng5n(e.target.value)} value={ing5n} id="ing5n" type="text" name="ing5n" />
                
            </div>
            <div className={ingcount>=5?"field formmar":"hide"}>
                <label htmlFor="ing5u"className='placeholder'>Ingredient 5 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng5u(e.target.value)} value={ing5u} id="ing5u" type="text" name="ing5u" />
                
            </div>
            <div className={ingcount>=5?"field formmar":"hide"}>
                <label htmlFor="ing5a"className='placeholder'>Ingredient 5 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng5a(e.target.value)} value={ing5a} id="ing5a" type="text" name="ing5a" />
                
            </div>
            <div className={ingcount>=5?"field formmar":"hide"}>
                <label htmlFor="ing5un"className='placeholder'>Ingredient 5 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng5un(e.target.value)} value={ing5un} id="ing5un" type="text" name="ing5un" />
                
            </div>
            <div className={ingcount>=6?"field formmar":"hide"}>
                <label htmlFor="ing6n"className='placeholder'>Ingredient 6 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng6n(e.target.value)} value={ing6n} id="ing6n" type="text" name="ing6n" />
                
            </div>
            <div className={ingcount>=6?"field formmar":"hide"}>
                <label htmlFor="ing6u"className='placeholder'>Ingredient 6 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng6u(e.target.value)} value={ing6u} id="ing6u" type="text" name="ing6u" />
                
            </div>
            <div className={ingcount>=6?"field formmar":"hide"}>
                <label htmlFor="ing6a"className='placeholder'>Ingredient 6 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng6a(e.target.value)} value={ing6a} id="ing6a" type="text" name="ing6a" />
                
            </div>
            <div className={ingcount>=6?"field formmar":"hide"}>
                <label htmlFor="ing6un"className='placeholder'>Ingredient 6 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng6un(e.target.value)} value={ing6un} id="ing6un" type="text" name="ing6un" />
                
            </div>
            <div className={ingcount>=7?"field formmar":"hide"}>
                <label htmlFor="ing7n"className='placeholder'>Ingredient 7 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng7n(e.target.value)} value={ing7n} id="ing7n" type="text" name="ing7n" />
                
            </div>
            <div className={ingcount>=7?"field formmar":"hide"}>
                <label htmlFor="ing7u"className='placeholder'>Ingredient 7 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng7u(e.target.value)} value={ing7u} id="ing7u" type="text" name="ing7u" />
                
            </div>
            <div className={ingcount>=7?"field formmar":"hide"}>
                <label htmlFor="ing7a"className='placeholder'>Ingredient 7 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng7a(e.target.value)} value={ing7a} id="ing7a" type="text" name="ing7a" />
                
            </div>
            <div className={ingcount>=7?"field formmar":"hide"}>
                <label htmlFor="ing7un"className='placeholder'>Ingredient 7 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng7un(e.target.value)} value={ing7un} id="ing7un" type="text" name="ing7un" />
                
            </div>
            <div className={ingcount>=8?"field formmar":"hide"}>
                <label htmlFor="ing8n"className='placeholder'>Ingredient 8 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng8n(e.target.value)} value={ing8n} id="ing8n" type="text" name="ing8n" />
                
            </div>
            <div className={ingcount>=8?"field formmar":"hide"}>
                <label htmlFor="ing8u"className='placeholder'>Ingredient 8 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng8u(e.target.value)} value={ing8u} id="ing8u" type="text" name="ing8u" />
                
            </div>
            <div className={ingcount>=8?"field formmar":"hide"}>
                <label htmlFor="ing8a"className='placeholder'>Ingredient 8 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng8a(e.target.value)} value={ing8a} id="ing8a" type="text" name="ing8a" />
                
            </div>
            <div className={ingcount>=8?"field formmar":"hide"}>
                <label htmlFor="ing8un"className='placeholder'>Ingredient 8 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng8un(e.target.value)} value={ing8un} id="ing8un" type="text" name="ing8un" />
                
            </div>
            <div className={ingcount>=9?"field formmar":"hide"}>
                <label htmlFor="ing9n"className='placeholder'>Ingredient 9 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng9n(e.target.value)} value={ing9n} id="ing9n" type="text" name="ing9n" />
                
            </div>
            <div className={ingcount>=9?"field formmar":"hide"}>
                <label htmlFor="ing9u"className='placeholder'>Ingredient 9 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng9u(e.target.value)} value={ing9u} id="ing9u" type="text" name="ing9u" />
                
            </div>
            <div className={ingcount>=9?"field formmar":"hide"}>
                <label htmlFor="ing9a"className='placeholder'>Ingredient 9 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng9a(e.target.value)} value={ing9a} id="ing9a" type="text" name="ing9a" />
                
            </div>
            <div className={ingcount>=9?"field formmar":"hide"}>
                <label htmlFor="ing9un"className='placeholder'>Ingredient 9 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng9un(e.target.value)} value={ing9un} id="ing9un" type="text" name="ing9un" />
                
            </div>
            <div className={ingcount>=10?"field formmar":"hide"}>
                <label htmlFor="ing10n"className='placeholder'>Ingredient 10 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng10n(e.target.value)} value={ing10n} id="ing10n" type="text" name="ing10n" />
                
            </div>
            <div className={ingcount>=10?"field formmar":"hide"}>
                <label htmlFor="ing10u"className='placeholder'>Ingredient 10 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng10u (e.target.value)} value={ing10u} id="ing10u" type="text" name="ing10u" />
                
            </div>
            <div className={ingcount>=10?"field formmar":"hide"}>
                <label htmlFor="ing10a"className='placeholder'>Ingredient 10 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng10a(e.target.value)} value={ing10a} id="ing10a" type="text" name="ing10a" />
                
            </div>
            <div className={ingcount>=10?"field formmar":"hide"}>
                <label htmlFor="ing10un"className='placeholder'>Ingredient 10 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng10un(e.target.value)} value={ing10un} id="ing10un" type="text" name="ing10un" />
                
            </div>
            <div className={ingcount>=11?"field formmar":"hide"}>
                <label htmlFor="ing11n"className='placeholder'>Ingredient 11 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng11n(e.target.value)} value={ing11n} id="ing11n" type="text" name="ing11n" />
                
            </div>
            <div className={ingcount>=11?"field formmar":"hide"}>
                <label htmlFor="ing11u"className='placeholder'>Ingredient 11 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng11u(e.target.value)} value={ing11u} id="ing11u" type="text" name="ing11u" />
                
            </div>
            <div className={ingcount>=11?"field formmar":"hide"}>
                <label htmlFor="ing11a"className='placeholder'>Ingredient 11 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng11a(e.target.value)} value={ing11a} id="ing11a" type="text" name="ing11a" />
                
            </div>
            <div className={ingcount>=11?"field formmar":"hide"}>
                <label htmlFor="ing11un"className='placeholder'>Ingredient 11 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng11un(e.target.value)} value={ing11un} id="ing11un" type="text" name="ing11un" />
                
            </div>
            <div className={ingcount>=12?"field formmar":"hide"}>
                <label htmlFor="ing12n"className='placeholder'>Ingredient 12 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng12n(e.target.value)} value={ing12n} id="ing12n" type="text" name="ing12n" />
                
            </div>
            <div className={ingcount>=12?"field formmar":"hide"}>
                <label htmlFor="ing12u"className='placeholder'>Ingredient 12 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng12u(e.target.value)} value={ing12u} id="ing12u" type="text" name="ing12u" />
                
            </div>
            <div className={ingcount>=12?"field formmar":"hide"}>
                <label htmlFor="ing12a"className='placeholder'>Ingredient 12 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng12a(e.target.value)} value={ing12a} id="ing12a" type="text" name="ing12a" />
                
            </div>
            <div className={ingcount>=12?"field formmar":"hide"}>
                <label htmlFor="ing12un"className='placeholder'>Ingredient 12 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng12un(e.target.value)} value={ing12un} id="ing12un" type="text" name="ing12un" />
                
            </div>
            <div className={ingcount>=13?"field formmar":"hide"}>
                <label htmlFor="ing13n"className='placeholder'>Ingredient 13 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng13n(e.target.value)} value={ing13n} id="ing13n" type="text" name="ing13n" />
                
            </div>
            <div className={ingcount>=13?"field formmar":"hide"}>
                <label htmlFor="ing13u"className='placeholder'>Ingredient 13 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng13u(e.target.value)} value={ing13u} id="ing13u" type="text" name="ing13u" />
                
            </div>
            <div className={ingcount>=13?"field formmar":"hide"}>
                <label htmlFor="ing13a"className='placeholder'>Ingredient 13 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng13a(e.target.value)} value={ing13a} id="ing13a" type="text" name="ing13a" />
                
            </div>
            <div className={ingcount>=13?"field formmar":"hide"}>
                <label htmlFor="ing13un"className='placeholder'>Ingredient 13 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng13un(e.target.value)} value={ing13un} id="ing13un" type="text" name="ing13un" />
                
            </div>
            <div className={ingcount>=14?"field formmar":"hide"}>
                <label htmlFor="ing14n"className='placeholder'>Ingredient 14 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng14n(e.target.value)} value={ing14n} id="ing14n" type="text" name="ing14n" />
                
            </div>
            <div className={ingcount>=14?"field formmar":"hide"}>
                <label htmlFor="ing14u"className='placeholder'>Ingredient 14 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng14u(e.target.value)} value={ing14u} id="ing14u" type="text" name="ing14u" />
                
            </div>
            <div className={ingcount>=14?"field formmar":"hide"}>
                <label htmlFor="ing14a"className='placeholder'>Ingredient 14 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng14a(e.target.value)} value={ing14a} id="ing14a" type="text" name="ing14a" />
                
            </div>
            <div className={ingcount>=14?"field formmar":"hide"}>
                <label htmlFor="ing14un"className='placeholder'>Ingredient 14 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng14un(e.target.value)} value={ing14un} id="ing14un" type="text" name="ing14un" />
                
            </div>
            <div className={ingcount>=15?"field formmar":"hide"}>
                <label htmlFor="ing15n"className='placeholder'>Ingredient 15 Name</label>
                <input step="any" className="validate" onChange={(e)=>setIng15n(e.target.value)} value={ing15n} id="ing15n" type="text" name="ing15n" />
                
            </div>
            <div className={ingcount>=15?"field formmar":"hide"}>
                <label htmlFor="ing15u"className='placeholder'>Ingredient 15 URL</label>
                <input step="any" className="validate" onChange={(e)=>setIng15u(e.target.value)} value={ing15u} id="ing15u" type="text" name="ing15u" />
                
            </div>
            <div className={ingcount>=15?"field formmar":"hide"}>
                <label htmlFor="ing15a"className='placeholder'>Ingredient 15 Amount</label>
                <input step="any" className="validate" onChange={(e)=>setIng15a(e.target.value)} value={ing15a} id="ing15a" type="text" name="ing15a" />
                
            </div>
            <div className={ingcount>=15?"field formmar":"hide"}>
                <label htmlFor="ing15un"className='placeholder'>Ingredient 15 Unit</label>
                <input step="any" className="validate" onChange={(e)=>setIng15un(e.target.value)} value={ing15un} id="ing15un" type="text" name="ing15un" />
                
            </div>
            
            <div className="field formmar">
                
                <label htmlFor="reccount"className='placeholder'>Total Recipe Steps (Max 15)</label>
                <input step="any" className="validate" value={reccount} onChange={(e)=>setReccount(e.target.value)}  id="reccount" min="1" max="15" type="number" name="reccount" />
            </div>
            <div className={reccount>=1?"field formmar":"hide"}>
                <label htmlFor="step1"className='placeholder'>Step 1</label>
                <input step="any" className="validate" onChange={(e)=>setStep1(e.target.value)} value={step1} id="step1" type="text" name="step1" />
                
            </div>
            <div className={reccount>=2?"field formmar":"hide"}>
                <label htmlFor="step2"className='placeholder'>Step 2</label>
                <input step="any" className="validate" onChange={(e)=>setStep2(e.target.value)} value={step2} id="step2" type="text" name="step2" />
                
            </div>
            <div className={reccount>=3?"field formmar":"hide"}>
                <label htmlFor="step3"className='placeholder'>Step 3</label>
                <input step="any" className="validate" onChange={(e)=>setStep3(e.target.value)} value={step3} id="step3" type="text" name="step3" />
                
            </div>
            <div className={reccount>=4?"field formmar":"hide"}>
                <label htmlFor="step4"className='placeholder'>Step 4</label>
                <input step="any" className="validate" onChange={(e)=>setStep4(e.target.value)} value={step4} id="step4" type="text" name="step4" />
                
            </div>
            <div className={reccount>=5?"field formmar":"hide"}>
                <label htmlFor="step5"className='placeholder'>Step 5</label>
                <input step="any" className="validate" onChange={(e)=>setStep5(e.target.value)} value={step5} id="step5" type="text" name="step5" />
                
            </div>
            <div className={reccount>=6?"field formmar":"hide"}>
                <label htmlFor="step6"className='placeholder'>Step 6</label>
                <input step="any" className="validate" onChange={(e)=>setStep6(e.target.value)} value={step6} id="step6" type="text" name="step6" />
                
            </div>
            <div className={reccount>=7?"field formmar":"hide"}>
                <label htmlFor="step7"className='placeholder'>Step 7</label>
                <input step="any" className="validate" onChange={(e)=>setStep7(e.target.value)} value={step7} id="step7" type="text" name="step7" />
                
            </div>
            <div className={reccount>=8?"field formmar":"hide"}>
                <label htmlFor="step8"className='placeholder'>Step 8</label>
                <input step="any" className="validate" onChange={(e)=>setStep8(e.target.value)} value={step8} id="step8" type="text" name="step8" />
                
            </div>
            <div className={reccount>=9?"field formmar":"hide"}>
                <label htmlFor="step9"className='placeholder'>Step 9</label>
                <input step="any" className="validate" onChange={(e)=>setStep9(e.target.value)} value={step9} id="step9" type="text" name="step9" />
                
            </div>
            <div className={reccount>=10?"field formmar":"hide"}>
                <label htmlFor="step10"className='placeholder'>Step 10</label>
                <input step="any" className="validate" onChange={(e)=>setStep10(e.target.value)} value={step10} id="step10" type="text" name="step10" />
                
            </div>
            <div className={reccount>=11?"field formmar":"hide"}>
                <label htmlFor="step11"className='placeholder'>Step 11</label>
                <input step="any" className="validate" onChange={(e)=>setStep11(e.target.value)} value={step11} id="step11" type="text" name="step11" />
                
            </div>
            <div className={reccount>=12?"field formmar":"hide"}>
                <label htmlFor="step12"className='placeholder'>Step 12</label>
                <input step="any" className="validate" onChange={(e)=>setStep12(e.target.value)} value={step12} id="step12" type="text" name="step12" />
                
            </div>
            <div className={reccount>=13?"field formmar":"hide"}>
                <label htmlFor="step13"className='placeholder'>Step 13</label>
                <input step="any" className="validate" onChange={(e)=>setStep13(e.target.value)} value={step13} id="step13" type="text" name="step13" />
                
            </div>
            <div className={reccount>=14?"field formmar":"hide"}>
                <label htmlFor="step14"className='placeholder'>Step 14</label>
                <input step="any" className="validate" onChange={(e)=>setStep13(e.target.value)} value={step14} id="step14" type="text" name="step14" />
                
            </div>
            <div className={reccount>=15?"field formmar":"hide"}>
                <label htmlFor="step15"className='placeholder'>Step 15</label>
                <input step="any" className="validate" onChange={(e)=>setStep15(e.target.value)} value={step15} id="step15" type="text" name="step15" />
                
            </div>
      <button className='btn blue' type='submit'>Add</button>
      </form>
      </div>
    </div>
  )
}

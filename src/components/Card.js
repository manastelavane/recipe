import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import veg from './veg.png'
import nonveg from './nonveg.png'

const Card = ({recipe,onRecipeSelect,image,name,time,cal,carbs,pro,fats}) => {
  const navigate=useNavigate()
  return (
    <div className='image-list' style={{cursor:'pointer'}} onClick={()=>{onRecipeSelect(recipe);navigate('/recipe')}}>
    <div >
  <div className="card shadow">
    <div className="blurring dimmable image">
      
      <img src={image}></img>
    </div>
    <div className='wholeContent'>
    <div className="content">
      <div style={{display:'inline-block' }}>
        <a className="header">{name}</a>
        </div>
        <img className='ui mini image' src={recipe.details.vegNon==="NonVeg"?veg:nonveg} />
      
      <div className="meta">
      <i className="clock icon"></i>{time}mins <span ></span> <i className="fire icon"></i>{cal}kcal
      </div>
    </div>
    <div className="extra content">
        <i className="users icon"></i>
        {recipe.details.servings} Members<span style={{paddingLeft:'20px'}}></span>
        <span className='carbs tooltip'><span className="tooltiptext">{carbs}g Net Carbs</span></span>{carbs}g<span style={{padding:'3px'}}></span>
        <span className='proteins tooltip'><span className="tooltiptext">{pro}g Proteins</span></span>{pro}g<span style={{padding:'3px'}}></span>
        <span className='fats tooltip'><span className="tooltiptext">{fats}g Fats</span></span>{fats}g
    </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Card

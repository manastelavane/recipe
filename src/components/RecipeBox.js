import { MuuriComponent } from 'muuri-react'
import React from 'react'
import { useCallback } from 'react';
import Card from './Card';

const RecipeBox = ({ term, bookmark, onRecipeSelect,searchkeyword }) => {
    
  return (
    <div className='ui  cards three column grid'>
        
        { bookmark.length>0?
          bookmark.map(recipe => {
            return (
              <>
                <Card key={recipe.recipename} onRecipeSelect={onRecipeSelect} recipe={recipe} image={recipe.details.image} name={recipe.recipename} time={recipe.details.timetocook} cal={recipe.details.calories} carbs={recipe.details.carbohydrates} pro={recipe.details.proteins} fats={recipe.details.fats} />
              </>
            )
          }):<><br/><br/><br/><div style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'35px',color:'red',backgroundColor:'white'}}>"Sorry,No Recipe Available"</div></>
        }
      </div>
  )
}

export default RecipeBox

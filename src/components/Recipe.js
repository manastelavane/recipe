import React from 'react'
import RecipeDetails from './RecipeDetails'
import RecipeVideo from './RecipeVideo'

const Recipe = ({selectedRecipe,videos}) => {
    // console.log(selectedRecipe)
  return (
    <div>
      <RecipeVideo selectedRecipe={selectedRecipe} videos={videos}/>
      <RecipeDetails selectedRecipe={selectedRecipe}/>
    </div>
  )
}

export default Recipe

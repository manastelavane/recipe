import React from 'react'
import { useEffect, useState } from 'react'
import './Card.css'

const RecipeDetails = ({ selectedRecipe }) => {
    const [quan, setQuan] = useState(null)
    useEffect(() => {
        if (selectedRecipe.details) {
            setQuan(selectedRecipe.details.servings)
        }
    }, [])
    console.log(selectedRecipe.ingredients.ing15.ing15a);
    return (
        <div style={{ marginTop: '20px', boxShadow: '0 0 7px black' }}>
            {
                (selectedRecipe.details) ?
                    <>
                        <div>
                            <div className='ui grid'>
                                <div className='ui row'>
                                    <div className='eight wide column'>
                                        <h1 className="ui center aligned header" style={{ textShadow: '1px 1px' }}>{selectedRecipe.details.recipename}</h1>
                                        <div class="ui right labeled input" style={{ marginLeft: '5px' }}>
                                            <input type="text" value={quan} placeholder="Quantity" onChange={(e) => setQuan(e.target.value)} />
                                            <div class="ui basic label">
                                                servings
                                            </div>
                                        </div>
                                        <div className='containerbox'>
                                            <h3 className="ui center aligned header">Recipe Details</h3>
                                            <div className='ui grid'><div className='ui row'>
                                                <div className='eight wide column'>
                                                    <h4>Time to Cook:&ensp; {((parseInt(selectedRecipe.details.timetocook)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}&nbsp;mins</h4>
                                                    <h4>Vegetarian:&ensp; {selectedRecipe.details.vegNon === "NonVeg" ? "No" : "Yes"}</h4>
                                                    <h4>Vegan:&ensp; {selectedRecipe.details.vegan === "false" ? "No" : "Yes"}</h4>
                                                    <h4>Price per Serving:&ensp; Rs.{((parseInt(selectedRecipe.details.priceperserving)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}</h4>
                                                    <h4>Glutenfree:&ensp; {selectedRecipe.details.glutenfree === "false" ? "No" : "Yes"}</h4>
                                                    <h4>Region:&ensp; {selectedRecipe.details.statereg}</h4>
                                                    <h4>Health Score:&ensp; {selectedRecipe.details.healthscore}/100</h4>
                                                </div>
                                                <div className='eight wide column'>
                                                    <div>
                                                        <h4><span className='carbs'></span>&ensp;Carbohydrates:&ensp; {((parseInt(selectedRecipe.details.carbohydrates)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}&nbsp;g </h4>
                                                        <h4><span className='proteins'></span>&ensp;Proteins:&ensp; {((parseInt(selectedRecipe.details.proteins)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}g&nbsp;</h4>
                                                        <h4><span className='fats'></span>&ensp;Fats:&ensp; {((parseInt(selectedRecipe.details.fats)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}g&nbsp;</h4>
                                                        <h4><i class="clock icon"></i>&ensp;Calories:&ensp;{((parseInt(selectedRecipe.details.calories)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}&nbsp;kcal</h4>
                                                    </div>
                                                </div></div></div>
                                        </div>
                                    </div>
                                    <div className='eight wide column'>
                                        <img src={selectedRecipe.details.image} style={{ boxShadow: '5px 10px 8px #888888' }} className='ui centered big image' />
                                    </div>
                                </div>
                            </div>
                            <h1 className="ui center aligned header" style={{ textShadow: '1px 1px' }}>Ingredients</h1>
                            <div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing1.ing1a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing1.ing1u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing1.ing1n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing1.ing1a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing1.ing1un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing2.ing2a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing2.ing2u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing2.ing2n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing2.ing2a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing2.ing2un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing3.ing3a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing3.ing3u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing3.ing3n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing3.ing3a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing3.ing3un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            
                            <div>
                                {
                                    selectedRecipe.ingredients.ing4.ing4a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing4.ing4u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing4.ing4n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing4.ing4a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing4.ing4un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing5.ing5a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing5.ing5u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing5.ing5n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing5.ing5a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing5.ing5un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing6.ing6a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing6.ing6u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing6.ing6n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing6.ing6a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing6.ing6un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing7.ing7a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing7.ing7u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing7.ing7n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing7.ing7a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing7.ing7un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing8.ing8a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing8.ing8u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing8.ing8n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing8.ing8a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing8.ing8un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing9.ing9a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing9.ing9u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing9.ing9n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing9.ing9a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing9.ing9un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing10.ing10a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing10.ing10u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing10.ing10n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing10.ing10a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing10.ing10un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing11.ing11a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing11.ing11u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing11.ing11n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing11.ing11a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing11.ing11un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing12.ing12a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing12.ing12u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing12.ing12n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing12.ing12a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing12.ing12un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing13.ing13a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing13.ing13u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing13.ing13n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing13.ing13a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing13.ing13un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing14.ing14a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing14.ing14u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing14.ing14n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing14.ing14a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing14.ing14un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            <div>
                                {
                                    selectedRecipe.ingredients.ing15.ing15a!==null?
                                    <>
                                    <div className="containerbox1">
                                        <img class="ui mini image" src={'https://spoonacular.com/cdn/ingredients_100x100/'+selectedRecipe.ingredients.ing15.ing15u}/>
                                        <h1 style={{marginTop:'0px'}}>{selectedRecipe.ingredients.ing15.ing15n}</h1>
                                        <h1 style={{marginTop:'0px'}}>{((parseInt(selectedRecipe.ingredients.ing15.ing15a)) / (parseInt(selectedRecipe.details.servings))) * parseInt(quan)}:{selectedRecipe.ingredients.ing15.ing15un}</h1>
                                    </div>
                                    </>:<></>
                                }
                            </div>
                            
                            </div>
                            <h1 className="ui center aligned header" style={{ textShadow: '1px 1px' }}>Recipe Steps</h1>
                            <div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step1!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 1:</h3>
                                            <diV>{selectedRecipe.steps.step1}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step2!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 2:</h3>
                                            <diV>{selectedRecipe.steps.step2}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step3!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 3:</h3>
                                            <diV>{selectedRecipe.steps.step3}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step4!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 4:</h3>
                                            <diV>{selectedRecipe.steps.step4}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step5!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 5:</h3>
                                            <diV>{selectedRecipe.steps.step5}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step6!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 6:</h3>
                                            <diV>{selectedRecipe.steps.step6}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step7!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 7:</h3>
                                            <diV>{selectedRecipe.steps.step7}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step8!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 8:</h3>
                                            <diV>{selectedRecipe.steps.step8}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step9!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 9:</h3>
                                            <diV>{selectedRecipe.steps.step9}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step10!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 10:</h3>
                                            <diV>{selectedRecipe.steps.step10}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step11!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 11:</h3>
                                            <diV>{selectedRecipe.steps.step11}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step12!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 12:</h3>
                                            <diV>{selectedRecipe.steps.step12}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step13!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 13:</h3>
                                            <diV>{selectedRecipe.steps.step13}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step14!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 14:</h3>
                                            <diV>{selectedRecipe.steps.step14}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            <div>
                                <diV>
                                    {
                                        selectedRecipe.steps.step15!==null?
                                        <div className='containerbox'>
                                            <h3 className='ui left aligned header'>Step 15:</h3>
                                            <diV>{selectedRecipe.steps.step15}</diV>
                                        </div>:<></>
                                    }
                                </diV> 
                            </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </>
                    :
                    <>Error</>

            }

        </div>
    )
}

export default RecipeDetails

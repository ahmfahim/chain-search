import React, { useEffect, useState } from 'react';
import './MealFinder.css'

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
    }, [search])
    // event handler
    const handleChange = event => {
        setSearch(event.target.value)
    }
    return (
        <div>
            <h2 className="title">Find delicious food</h2>
            <p style={{ borderBottom: '2px solid #00ff55', width:'50%'}}></p>
            <input type="text" onChange={handleChange} placeholder="search meal" />
            <p style={{ fontFamily:'Courier New'}}>Searching- <strong>{search}</strong></p>
            <p style={{ fontFamily: 'Courier New' }}>Meals found - <strong>{meals?.length || 0}</strong> </p>
            <div>
                {
                    meals?.map(meal => <div className="meal-cart"> 
                        <div className="img-div">
                            <img src={meal.strMealThumb} alt="" style={{ width: '100%', height: '200px', borderTopLeftRadius: '150px' }} />
                        </div>
                        <h3>{meal.strMeal}</h3>
                        <p>Area: <strong style={{color:'black'}}>{meal.strArea}</strong> </p>
                        <p style={{ height: '100px', overflowY: 'scroll', background: 'white' }}> <strong style={{ color: 'black' }}> Instruction:</strong> {meal.strInstructions}</p>
                        <a style={{textDecoration: 'none', background:'yellow', padding:'5px',borderRadius:'10px', color:'black', fontWeight:'bold'}} href={meal.strYoutube}>Youtube</a>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MealFinder;
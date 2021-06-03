import React, {useState} from "react";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e){
    setCalories(e.target.value);

  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e22d2ce373c644e190456b52ab755424&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => { 
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  }
  

  return  <div className="App">
      <section className="controls">
        <input 
        type="number"
        placeholder="calories (e.g 2000)"
        onChange={handleChange}/>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
</div>
      }

export default App;

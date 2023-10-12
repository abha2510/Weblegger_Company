import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Wishlist.css";
import Navbar from "./Navbar";

function stripHTML(htmlString) {
  let doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

const Wishlist = () => {
 let userId=localStorage.getItem("userId")
 
  if (!userId) {
    userId = localStorage.getItem("userId");
  }

  const [data, setData] = useState([]);

  const fetchRecipe = () => {
    axios
      .get(`https://itchy-slippers-eel.cyclic.cloud/recipe?userId=${userId}`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    fetchRecipe();
  }, [userId]);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {data.map((item) => {
          const extendedIngredients = item.extendedIngredients || [];
          const diets = item.diets || [];
          const dishTypes = item.dishTypes || [];

          return (
            <div key={item._id} className="recipe">
              <p className="card-title">{item.title}</p>
              <img src={item.image} alt="recipe" className="card-image" />

              <p className="card-label">Ingredients:</p>
              <div className="ingredients-list">
                {extendedIngredients.map((el) => (
                  <li key={el.id} className="ingredient-item">
                    {el.name}
                  </li>
                ))}
              </div>

              <p className="card-label">Diets:</p>
              <div className="diets-list">
                {diets.map((el, index) => (
                  <li key={index} className="diet-item">
                    {el}
                  </li>
                ))}
              </div>

              <p className="card-label">DishType:</p>
              <div className="dish-types-list">
                {dishTypes.map((el, index) => (
                  <li key={index} className="dish-type-item">
                    {el}
                  </li>
                ))}
              </div>

              <p className="card-label">Instruction:</p>
              <p className="card-instruction">{stripHTML(item.instructions)}</p>
              <p className="card-label">Summary:</p>
              <p className="card-summary">{stripHTML(item.summary)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ProductList.css";
import { useNavigate } from "react-router-dom";


function stripHTML(htmlString) {
  let doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

const ProductList = ({ userId }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const Base_url =
    "https://api.spoonacular.com/recipes/random?number=15&apiKey=5c518d49481941d4a8f204a0680f05f9";


    const fetchRecipe = (keyword = "", diet = "") => {
      setIsLoading(true);
      let url = `${Base_url}`;
  
      if (keyword) {
        url += `&query=${keyword}`;
      }
  
      if (diet) {
        url += `&diet=${diet}`;
      }
  
      axios
        .get(url)
        .then((res) => setData(res.data.recipes))
        .catch((err) => console.log(err));
        setIsLoading(false);
    };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipe(searchKeyword, selectedDiet);
  };

  const handleRecipe = (el) => {
    localStorage.setItem("item", JSON.stringify(el));
    navigate("/detail");
  };

  const postRecipe = (recipeData) => {
    const dataToPost = {
      userId: userId,
      title: recipeData.title,
      extendedIngredients: recipeData.extendedIngredients || [],
      instructions: recipeData.instructions,
      readyInMinutes: recipeData.readyInMinutes,
      servings: recipeData.servings,
      cuisines: recipeData.cuisines || [],
      diets: recipeData.diets || [],
      image: recipeData.image,
      dishTypes: recipeData.dishTypes || [],
      author: recipeData.sourceName,
      summary: recipeData.summary,
      fontColor: recipeData.fontColor || "defaultColor",
      source: recipeData.sourceName,
      occasions: recipeData.occasions || [],
    };

    try {
      axios({
        method: "post",
        url: "https://itchy-slippers-eel.cyclic.cloud/recipe",
        data: dataToPost,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          alert(response.data.msg);
          navigate("wishlist", { state: { userId } });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="recipe-search">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <select
        value={selectedDiet}
        onChange={(e) => setSelectedDiet(e.target.value)}
      >
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <button type="submit">Search</button>
    </form>
  </div>

    <div className="recipe-container">
      
      {data.map((el) => {
        return (
          <div
            className="recipe-card"
            key={el.id}
            onClick={() => handleRecipe(el)}
          >
            <h1 className="recipe-title">{el.title}</h1>
            <img className="recipe-image" src={el.image} alt="img" />
            <p className="recipe-summary">{stripHTML(el.summary)}</p>
            <button
              className="recipe-button"
              onClick={(e) => {
                e.stopPropagation();
                postRecipe(el);
              }}
            >
              Add to Myfavorite
            </button>
          </div>
        );
      })}
    </div>

    </>
  );
};

export default ProductList;

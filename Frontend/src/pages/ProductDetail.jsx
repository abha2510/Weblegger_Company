import React from "react";
import "../css/ProductDetail.css";
import Navbar from "./Navbar";

function stripHTML(htmlString) {
  let doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

const ProductDetail = () => {
  const item = JSON.parse(localStorage.getItem("item"));

  return (
    <>
      <Navbar />
      <div className="container">
        <p>{item.title}</p>
        <img src={item.image} alt="img" className="detail_img" />

        <p className="label">Ingredients:</p>
        {item.extendedIngredients.map((el) => {
          return (
            <p className="item" key={el.id}>
              {el.name}
            </p>
          );
        })}

        <p className="label">Diets:</p>
        {item.diets.map((el) => {
          return (
            <p className="item" key={el}>
              {el}
            </p>
          );
        })}

        <p className="label">DishType:</p>
        {item.dishTypes.map((el) => {
          return (
            <p className="item" key={el}>
              {el}
            </p>
          );
        })}
        <p className="label">Instruction: </p>
        <p>{stripHTML(item.instructions)}</p>
        <p className="label">Summary: </p>
        <p>{stripHTML(item.summary)}</p>
      </div>
    </>
  );
};

export default ProductDetail;

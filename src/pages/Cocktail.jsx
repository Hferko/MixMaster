import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
}

const Cocktail = () => {
  const { id, data } = useLoaderData();

if (!data) {
  return <Navigate to='/'/>;
}

  const singleDrink = data.drinks[0];

  // let ingredients = [];
  // for (let i = 1; i < 16; i++) {
  //   let ing = "strIngredient" + i;
  //   if (singleDrink[ing] !== null) {
  //     igredients.push(singleDrink[ing]);
  //   }
  // }

  const ingredients = 
    Object.keys(singleDrink).filter((key) => key.startsWith("strIngredient") && singleDrink[key] !== null)
    
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <Link to='/' className="btn">Vissza a kezdőlapra</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Név:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Kategória:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Pohár:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Összetevők:</span>
            {ingredients.map((item, index) => {
              return <span key={index} className=".ing">
                {singleDrink[item]}{index < ingredients.length-1 ? ';  ' : ''}
              </span>
            })}
          </p>
          <p>
            <span className="drink-data">Elkészítése:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail;
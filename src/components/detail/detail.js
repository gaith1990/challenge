import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./detail.css";

function Detail(props) {
  const [cocktail, setCocktail] = useState([]);
  const [loadUsers, setloadUsers] = useState(true);
  const { id } = props.match.params;
  console.log(id);
  const getUsersbyid = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setCocktail(res.data);
        setloadUsers(false);
      })
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    getUsersbyid();
  }, []);
  return (
    <div >
      {loadUsers ? (
        <Spinner type="grow" color="success" />
      ) : (
        <div className='form'>
          <img className='formimg' src={cocktail.drinks[0].strDrinkThumb} alt="" />
          <div className='formtext'>
            <h2 >Category : {cocktail.drinks[0].strCategory}</h2>
            <h2>Instructions : 
              {cocktail.drinks[0].strInstructionsDE} <br />{" "}
              {cocktail.drinks[0].strInstructions}
            </h2>{" "}
          </div>
        </div>
      )}
      )
    </div>
  );
}

export default Detail;

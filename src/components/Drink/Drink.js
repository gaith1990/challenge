import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Drink.css";
import { Link } from "react-router-dom";

function Drink({ users, loadUsers }) {
  return (
    <div class="image-area">
		<div class="img-wrapper">
			<img src={users.strDrinkThumb} alt="Atul Prajapati" />
			<h2>{users.strDrink} </h2>
      
			<ul>
        <li>
          <Link to={`/Drink/${users.idDrink}`}>
            <button className='btndetail'>detail</button>
            </Link>
            </li>
			</ul>
		</div>
	</div>
    
    
    );
  }
    
    {/* // <div className="card">
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src={users.strDrinkThumb} />
    //     <Card.Body>
    //       <Card.Title>{users.strDrink}</Card.Title>
    //       <Card.Text>Category: {users.strCategory}</Card.Text>
    //       <Card.Text>{users.strAlcoholic}</Card.Text>
    //       <Link to={`/Drink/${users.idDrink}`}>
    //         <Button variant="primary">Detail</Button>
    //       </Link>
    //     </Card.Body>
    //   </Card>
    // </div>
  */}

export default Drink;

import React from 'react'
import Drink from '../Drink/Drink'
import {Spinner} from 'react-bootstrap'
import './DrinkList.css'


function DrinkList({users,loadUsers,search}) {
    return (
        <div className='listcard'>
        {loadUsers ? (
        <Spinner type="grow" color="success" />
      ) : (
        users.drinks.filter((el)=>el.strDrink.toLowerCase().includes(search.toLowerCase())).length>0?users.drinks.filter((el)=>el.strDrink.toLowerCase().includes(search.toLowerCase())).map((el)=> <Drink  users={el} />):<h1 className='msg' style={{}}>No Cocktail found for your search</h1>
      )}
        
        
        </div>
    )
}

export default DrinkList

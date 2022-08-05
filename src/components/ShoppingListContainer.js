import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ShoppingListCard from './ShoppingListCard';

function ShoppingListContainer({ shoppingList }) {

  // console.log(shoppingList)
  // const shoppingItems = shoppingList.map((item) => (
  //   <h3 key={uuidv4()}>{item}</h3>
  // ))

  const ShoppingListItems = shoppingList.map((recipe) => (
    <ShoppingListCard
      recipe={recipe}
    />
  ))
  return (
  <div className="shoppingItems">
    {ShoppingListItems}
  </div>
)
}

export default ShoppingListContainer;
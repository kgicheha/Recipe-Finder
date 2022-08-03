import React from 'react'

function ShoppingList({shoppingList}) {
  console.log("ShoppingList")
  const shoppingItems = shoppingList.map((item) => (
    <h3>{item}</h3>
))
  return (
  <div className="shoppingItems">
    {shoppingItems}
  </div>
)
}

export default ShoppingList
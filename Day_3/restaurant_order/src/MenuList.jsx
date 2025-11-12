import React from 'react'

function MenuList ({ items, onAddToCart }) {

    

  return (
      <div className="menu-list">
      <h2>Menu</h2>
      {items.map(item => (
        <div key={item.id} className="menu-item">
          <div>
            <h3>{item.name}</h3>
            <p>₦{item.price.toLocaleString()}</p>
          </div>
          <button onClick={() => onAddToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default MenuList
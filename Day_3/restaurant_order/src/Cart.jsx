import React from 'react'

function Cart ({ items, onRemove, onUpdateQuantity }) {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your Order</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>₦{item.price.toLocaleString()} x {item.quantity}</p>
              </div>
              <div className="cart-actions">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button onClick={() => onRemove(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total: ₦{total.toLocaleString()}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
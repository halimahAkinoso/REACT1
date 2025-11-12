
import React from 'react' 
import { useState } from 'react';
import MenuList from './MenuList';
import Cart from './Cart';
import './RestaurantApp.css';
    

function App () {
  const [cartItems, setCartItems] = useState([]);
  const menuItems = [
    {id: 1, name: 'Jollof Rice, price: 1200'},
    {id: 2, name: 'Fried Rice, price: 2000'},
    {id: 3, name: 'Pounded Yam, price: 1000'},
    {id: 4, name: 'suya, price: 1500'},
    {id: 5, name: 'Plantain, price: 500'}
  ];

  function handleAddToCart(item){
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem){
      // Increase quantity if item already in cart
    setCartItems(cartItems.map(cartItem => cartItem.id === item.id  ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
    }else{
      // add new item to cart
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  }
  function handleRemoveFromCart(itemId) {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

    function handleUpdateQuantity(itemId, newQuantity) {
    if (newQuantity === 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  }


  return (
    <div className='restaurant-app'> 
    <h1>🍽️ Naija Restaurant</h1>
    <div className='container'>
      <MenuList
      items={menuItems} 
      onAddToCart={handleAddToCart} 
      />
      <Cart 
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
    </div>
   
    </div>
  )
}

export default App
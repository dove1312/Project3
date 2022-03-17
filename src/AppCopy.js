import pizzaImg from './assets/pizza.jpg'
import Cart from './Cart';

import ItemList from './ItemList';
import react, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function App() {

  const [cart, setCart] = useState([]);
  const [store, setStore] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {

    // const fakeCart = [
    //   {
    //     prodctName: 'chicken',
    //     quantity: 0
    //   },
    //   {
    //     productName: 'apple',
    //     quantity: 0
    //   },
    //   {
    //     productName: 'grape',
    //     quantity: 0
    //   }
    // ]
    const product = [
      {
        id: 1,
        name: "pizza",
        img: pizzaImg,
        addedToCart: false,
        price: 500,
        quantity: 0
      },
      {
        id: 2,
        name: "banana",
        img: null,
        addedToCart: false,
        price: 1000,
        quantity: 0
      },
      {
        id: 3,
        name: "creampie",
        img: null,
        addedToCart: false,
        price: 2000,
        quantity: 0
      }
    ]

    const newStore = []
    newStore.push(...product)
    console.log(newStore)
    setStore(newStore)

  }, [])

  // const handleClick = (name) => {
  //   const inventory = [...cart]
  //   console.log(inventory)
    
  //   const newInventory = cart.filter((item) => {
  //     return (
  //       item.productName !== name
  //       )
  //     })
  //     console.log(newInventory)
      
  //   if (Object.keys) {
  //     inventory.push({ productName: name, quantity: currentQuantity + 1 })
  //   }

  //   console.log(inventory)
  //   setCart(inventory)
  // }

  const handleRemove = (idx) => {
    const newCart = [...cart]
    console.log(newCart)
    newCart.splice(idx, 1)
    setCart(newCart)
}

  const handleClick = (name, img) => {
    const inventory = [...cart]
    const itemToPush = {name: name, img: img}
    inventory.push(itemToPush)
    console.log(inventory)
    setCart(inventory)
  }

  return (
    <div className="App">
      <Cart handleRemove={handleRemove} cart={cart} store={store} />
      <ItemList handleClick={handleClick} store={store} />
    </div>
  );
}

export default App;

import { useEffect, useState, useRef } from "react";
import pizzaImg from './assets/pizza.jpg'


function Cart(props) {

    

    const sideBarRef = useRef()

    const handleClick = (e) => {
        sideBarRef.current.style.opacity = 1;
    }

    const closeSideBar = () => {

    }

    console.log(props.store)
    return (<>
        <div onClick={handleClick} className="cartIcon"></div>
        <div ref={sideBarRef} className="sideBar">
            <div onClick={closeSideBar} className="sideBarClose"></div>
            <h2>Your cart</h2>
            {props.cart.map((data, index)=>{
                return(<div>
                    <p>{data.name}</p>
                    <p>quantity: {data.quantity}</p>
                    <img src={data.img} alt="" />
                    <button onClick={()=>{props.handleRemove(index)}}>Remove</button>
                </div>
                )
            })}
        </div>
    </>

    )
}

export default Cart;
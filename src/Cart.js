import { useEffect, useState, useRef } from "react";
import pizzaImg from './assets/pizza.jpg'


function Cart(props) {

    

    const sideBarRef = useRef()

    const handleClick = (e) => {
        console.log(sideBarRef)
        if(sideBarRef.current.style.display === '' || sideBarRef.current.style.display === 'none'){
            sideBarRef.current.style.display = 'unset'
        }else{
            sideBarRef.current.style.display = 'none'
        }
    }

    console.log(props.store)
    console.log(props.cart)
    return (<>
        <div onClick={handleClick} className="cartIcon"></div>
        <div ref={sideBarRef} className="sideBar">
            <h2>Your cart</h2>
            {props.cart.map((data, index)=>{
                return(<div>
                    <p>{data.name} x{data.quantity}</p>
                    <img className="cartImg" src={data.img} alt="" />
                    <button onClick={()=>{props.handleRemove(data.name, index)}}>Remove</button>
                    <p>${data.price*data.quantity}</p>
                </div>
                )
            })}
        </div>
    </>

    )
}

export default Cart;
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import { CartContext } from '../context/CartContext'

function EachProduct() {
  //authentication
  const auth = useContext(AuthContext);
  const [eachProductState, setEachProductState] = useState(null);
  const [quantityState, setQuantityState] = useState(1);
  const {cartState, setCartState} = useContext(CartContext);
  
  const { id } = useParams();
  const url = `http://localhost:4000/product/${id}`;
  
  useEffect(() => {
    const fetchEachProduct = async () => {
      try {
        const responseData = await fetch(url);
        const eachProductData = await responseData.json();
        setEachProductState(eachProductData);
      } catch (error) {
        console.log(error)
      }
    }
    fetchEachProduct();
    
  }, [id, url]);

  //states handler
  const onChangeHandler = (e,setValue) => {
    setValue(e.target.value);
  }

  // Handle quantity change
  const handleQuantityChange = (event) => {
    setQuantityState(parseInt(event.target.value));
  };
  
  // Handle add to cart
  const handleAddToCartSubmit =async (event) => {
    const getUserData = JSON.parse(localStorage.getItem("userData"))
    const cartId = getUserData.userData.cart[0]._id

    event.preventDefault();

    const updateCart = {
      product: eachProductState._id,
      quantity: quantityState
    }

    try {
      const cartresponseData = await fetch(`http://localhost:4000/cart/${cartId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCart)
      });

      const updatedCart = await cartresponseData.json();
      console.log('Cart:', updatedCart);
      // update version
      setCartState(updatedCart);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Adding to cart:', eachProductState, 'Quantity:', quantityState);
  };

  function decreaseQuantity() {
    if (quantityState > 1) {
      setQuantityState(quantityState - 1);
    }
  }
  
  function increaseQuantity() {
    setQuantityState(quantityState + 1);
  }
  
  return (
    <>
    {eachProductState ? (
      <div className='flex px-24 py-16 overflow-hidden'>
        <div className='w-[40%] h-[calc(100vh-26rem)]'>
          <img className="w-full h-full object-cover" src={eachProductState.images[0]} alt="product pic"/>
        </div>

        <div className='w-[60%] px-10'>
          <div className='text-3xl font-bold mb-2'>{eachProductState.title}</div>
          <div className='text-xl mb-7'>${eachProductState.price}</div>
          <div className='mb-10'>{eachProductState.description}</div>
          <div>
            <button className='bg-[#83884E] text-white w-8 h-8' onClick={decreaseQuantity}>-</button>
            <input className='w-24 text-center' type="number" value={quantityState} onChange={handleQuantityChange} min="1" />
            <button className='bg-[#83884E] text-white w-8 h-8' onClick={increaseQuantity}>+</button>
          </div>
            <button className="bg-[#83884E] text-white w-40 h-8 mt-8" onClick={handleAddToCartSubmit}>
              Add To Cart
            </button>
        </div>
      </div>
    ) : (
      "...loading"
      )}
    </>
  )
}

export default EachProduct

		  
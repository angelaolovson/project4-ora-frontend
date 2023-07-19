import React, { useContext, useEffect, useState } from 'react'
import './EachProduct.css'
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
      <div className='eachProduct'>
        <div className='eachProductImgContainer'>
          <img className="eachProductImg" src={eachProductState.images[0]} alt="product pic"/>
        </div>

        <div className='eachProductInfoContainer'>
          <div className='eachProductTitle'>{eachProductState.title}</div>
          <div className='eachProductPrice'>${eachProductState.price}</div>
          <div className='eachProductDescription'>{eachProductState.description}</div>
          <div>
            <button onClick={decreaseQuantity}>-</button>
            <input type="number" value={quantityState} onChange={handleQuantityChange} min="1" />
            <button onClick={increaseQuantity}>+</button>
          </div>
            <button className="addToCart" onClick={handleAddToCartSubmit}>
              Add To Cart
            </button>
          <div>
            {auth.userId === "64b7561ce20f8019002809ad" && (
              <Link to={`/product/${eachProductState._id}/edit`}>
                Update or Delete
              </Link>
            )}
          </div>
        </div>
      </div>
    ) : (
      "...loading"
      )}
    </>
  )
}

export default EachProduct

		  
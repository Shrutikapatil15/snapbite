import React, { useContext, useState } from 'react';

import './Fooditem.css';

import '../../assets/assets'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


// un-necessary code
// const [itemCont, setItemCount] = useState(0);

//   /* !itemCont 
//   /* ? <img  className='add' src={assets.add_icon_white} onClick={() => setItemCount((prev) => prev + 1)} />
//   : <div className='food-item-counter'>
//       <img src={assets.remove_icon_red} onClick={() => setItemCount((prev) => prev-1)}/>
//       <p>{itemCont}</p>
//       <img src={assets.add_icon_green} onClick={() => setItemCount((prev) => prev+1)}/>
//     </div> 
//   const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


const Fooditem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt=''/>
            {
    
              !cartItems[id]   // itemCount == 0
              ? <img  className='add' src={assets.add_icon_white} 
              onClick={() => addToCart(id)} />
              : <div className='food-item-counter'>
                  <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)}/>
                  <p>{cartItems[id]}</p>
                  <img src={assets.add_icon_green} onClick={() => addToCart(id)}/>
              </div>

            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem;
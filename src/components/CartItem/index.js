import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

/* prettier-ignore */

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      const onIncrementCartItemQuantity = () => {
        incrementCartItemQuantity(id)
      }

      const onDecrementCartItemQuantity = () => {
        decrementCartItemQuantity(id)
      }

      // TODO: Update the functionality to increment and decrement quantity of the cart item

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                aria-label="Button Label3"
                className="quantity-controller-button"
                onClick={onDecrementCartItemQuantity}
              >
                <BsDashSquare data-testid="minus" color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button type="button"   aria-label="Button Label34"  className="quantity-controller-button">
                <BsPlusSquare
                  color="#52606D"
                  size={12}
                  data-testid="plus"
                  onClick={onIncrementCartItemQuantity}
                />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
           aria-label="Button Label323"
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem

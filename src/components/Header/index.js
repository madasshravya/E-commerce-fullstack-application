import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import newlogo from '../../assets/images/sgslogo.jpg'
import logoutimg from '../../assets/images/log-out-img.png'
import homeicon from '../../assets/images/home-icon.png'
import productsicon from '../../assets/images/products-icon.png'
import carticon from '../../assets/images/cart-icon.png'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    Cookies.remove('Token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img className="website-logo" src={newlogo} alt="website logo" />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img src={logoutimg} alt="nav logout" className="nav-bar-img" />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img className="website-logo" src={newlogo} alt="website logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img src={homeicon} alt="nav home" className="nav-bar-img" />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src={productsicon}
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img src={carticon} alt="nav cart" className="nav-bar-img" />
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)

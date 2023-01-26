import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import * as productsReducer from "../Redux/products/products.reducer";
import * as productsActions from "../Redux/products/products.actions";
import * as cartReducer from "../Redux/cart/cart.reducer";


function Navbar() {
    let dispatch = useDispatch();

    const location = useLocation();

    const cartInfo = useSelector((state) => {
        return state[cartReducer.cartFeatureKey]
    })

    let { cart } = cartInfo;

    const productsInfo = useSelector((state) => {
        return state[productsReducer.productsFeatureKey];
    })

    let { searchTerm } = productsInfo;

    const clickToSearchProducts = (e) => {
        dispatch(productsActions.searchProducts(e.target.value));
    }

    const clickToRedirect = () => {
        dispatch(productsActions.searchProducts(" "));
    }



    return (
        <div>
           

                <nav className="navbar navbar-dark bg-dark fixed-top shadow py-3" >
                    <div className="container">

                        <NavLink  to="/" className="navbar-brand fst-italic me-auto fs-3  firstDiv" onClick={clickToRedirect} >Bigbasket</NavLink>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                            {
                                location.pathname == "/" ? (<ul className="navbar-nav mx-auto mb-2 mb-lg-0 secondDiv">
                                    <li className="nav-item">
                                        <form className="d-flex">

                                            <input className="form-control shadow-none searchbar " type="search"  value={searchTerm} onChange={clickToSearchProducts} placeholder="Search" />

                                        </form>
                                    </li>
                                </ul>) : null
                            }

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  thirdDiv">

                                <li className="nav-item">
                                    <NavLink  to="/cart" className="btn btn-sm btn-outline-light position-relative">
                                        <i className="fa fa-shopping-cart fs-2"></i> Cart
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

                                            {cart.length}

                                        </span>
                                    </NavLink>
                                </li>
                            </ul>


                        {/* </div> */}
                    </div>
                </nav>
                <Outlet />
            
        </div>
    )
}

export default Navbar
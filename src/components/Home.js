import React, { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import * as productsReducer from "../Redux/products/products.reducer";
import * as productsActions from "../Redux/products/products.actions";
import * as cartActions from "../Redux/cart/cart.actions";
import * as cartReducer from "../Redux/cart/cart.reducer";


const Home = () => {
    let dispatch = useDispatch();

    const productsInfo = useSelector((state) => {
        return state[productsReducer.productsFeatureKey];
    })

    const cartInfo = useSelector((state) => {
        return state[cartReducer.cartFeatureKey]
      })
    
    let { loading, products, errorMessage, searchTerm } = productsInfo;

    let { cart } = cartInfo;

    useEffect(() => {
        dispatch(productsActions.fetchProducts())
    }, [])


    const filteredProducts =
        searchTerm ?
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) :
            products;


    const addProductToCart = (newProduct) => {

        let inCart = cart.some((product) => product.id === newProduct.id);
        if (inCart) {
            alert("The product already exists in the cart")

        } else {
            dispatch(cartActions.addToCart(newProduct))
        }
      
    }

    return (
        <div>
            <div className='container'>
                <div className='section'>

                    <div className='row'>

                        {
                            errorMessage ? alert(errorMessage) : loading ?
                                <div className="text-center">
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                : filteredProducts.length ?

                                    filteredProducts.map((product, index) => {
                                        return (
                                            <div className="col" key={product.id}>
                                                <div className="card productcard mb-3">
                                                    <div className="card-header">
                                                        <img src={product.image} className="card-img-top p-3 " height="300px" alt="..." />

                                                    </div>
                                                    <div className="card-body text-dark">
                                                        <div className="card-title h5">{product.title}</div>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="h3"><i className="fa fa-rupee fs-6 "></i> {product.price}</div>

                                                            <StarRatings
                                                                rating={product.rating.rate}
                                                                starRatedColor="orange"
                                                                numberOfStars={5}
                                                                name='rating'
                                                                starDimension="20px"
                                                                starSpacing="0px"
                                                            />
                                                        </div>


                                                        <p className="card-text description" >{product.description}</p>
                                                        <div className='d-grid'>
                                                            <button className="btn btn-warning shadow-none" type='button' onClick={addProductToCart.bind(this, product)} >Add to Cart</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                    : <div className="text-center">No results found</div>
                             }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cartReducer from "../Redux/cart/cart.reducer";
import * as cartActions from "../Redux/cart/cart.actions";

const Cart = () => {
  let dispatch = useDispatch();


  let subTotal = 0;
  let shippingFee = 40;
  let orderTotal = 0;

  const cartInfo = useSelector((state) => {
    return state[cartReducer.cartFeatureKey]
  })

  let { cart } = cartInfo;




  const clickToClearCart = () => {
    dispatch(cartActions.clearCart())
  }

  const clickToDeleteCartItem = (id) => {
    dispatch(cartActions.deleteCartItem(id))
  }

  const clickToIncQty = (product) => {
    dispatch(cartActions.incQty(product))
  }

  const clickToDecQty = (product) => {
    dispatch(cartActions.decQty(product))
  }

  const clickToPlaceOrder = () => {

    alert("Your order placed successfully...!")
    dispatch(cartActions.clearCart())

  }

  return (
    <div>
      <div className='container'>
        <div className='section'>
          {
            cart.length > 0 ?
              <div className='row'>
                <div className='col-9'>
                  <table className="table carttable text-center ">
                    <thead className="table-dark ">
                      <tr>
                        <th width="20%">Image</th>
                        <th width="20%">Title</th>
                        <th width="15%">Price</th>
                        <th width="20%">Quantity</th>
                        <th width="15%">Sub Total</th>
                        <th width="10%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cart.map((product, index) => {
                          subTotal += Number(product.total_qty_price);
                          orderTotal = subTotal + shippingFee;
                          return (
                            <tr key={index}>
                              <th className="align-middle"><img src={product.image} width="100" height="100" alt="..." /></th>
                              <td className="align-middle">{product.title}</td>
                              <td className="align-middle"><i className="fa fa-rupee"></i> {product.price}</td>
                              <td className="align-middle">
                                <div className="d-flex">
                                  <button className="btn btn-white border-0 me-2" type="button" onClick={clickToDecQty.bind(this, product)}><i className="fa fa-minus fs-4 text-danger"></i></button>
                                  <input type="text" className="form-control shadow-none me-2 text-center  border border-2 border-dark " value={product.quantity} readOnly />
                                  <button className="btn btn-white border-0" type="button" onClick={clickToIncQty.bind(this, product)}><i className="fa fa-plus fs-4 text-danger"></i></button>
                                </div>
                              </td>
                              <td className="align-middle"><i className="fa fa-rupee"></i> {product.total_qty_price}</td>
                              <td className="align-middle ">
                                <button className="btn btn-white border-0 " type="button" onClick={clickToDeleteCartItem.bind(this, index)}><i className="fa fa-trash fs-4 text-danger"></i></button>
                              </td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <td colSpan="6">
                          <button className="btn btn-warning float-end " type="button" onClick={clickToClearCart}>Clear Cart</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col-3'>
                  <div className="card border-0 cartsummary rounded-0">
                    <div className="card-header text-center h5 bg-dark text-white rounded-0">Order Summary</div>
                    <div className="card-body ">
                      <ul className="list-group list-group-flush ">
                        <li className="list-group-item border-0 d-flex justify-content-between  fw-bold">Sub Total<span><i className="fa fa-rupee"></i> {subTotal.toFixed(2)}</span></li>
                        <li className="list-group-item d-flex justify-content-between fw-bold ">Shipping Fee<span><i className="fa fa-rupee"></i> {shippingFee}</span></li>
                        <li className="list-group-item d-flex justify-content-between fw-bold text-danger ">Order Total<span><i className="fa fa-rupee"></i> {orderTotal.toFixed(2)}</span></li>
                      </ul>
                      <div className="d-grid mt-3">
                        <button className="btn btn-warning" type="button" onClick={clickToPlaceOrder}>Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <p>Your cart is empty please continue shopping</p>
          }
        </div>
      </div>
    </div>
  )
}



export default Cart
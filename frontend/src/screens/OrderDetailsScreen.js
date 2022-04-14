import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderDetailsScreen() {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const orderDetails = useSelector(state => state.orderDetails);
    const { loading, error, order } = orderDetails;

    console.log('order: ', order);

    useEffect(() => {
        dispatch(detailsOrder(id))
    }, [dispatch, id]);
    return  loading ? (<LoadingBox/>)
    : error ? (<MessageBox variant="danger">{error}</MessageBox>)
    :(
    <div>
        <h1><strong>Oder: {order._id}</strong></h1>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{order.shippingAddress.fullName} <br/>
                                <strong>Address: </strong>
                                    {order.shippingAddress.address},
                                    {order.shippingAddress.city},
                                    {order.shippingAddress.country}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Method: </strong>{order.paymentMethod}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                                {order.orderItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                    <div>
                                        <img
                                        src={item.image}
                                        alt={item.name}
                                        className="small"
                                        ></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>{item.qty} x ${item.price} = ${item.qty * item.price}</div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                                <div>Items</div>
                                <div>${order.itemsPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Shipping</div>
                                <div>${order.shippingPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Tax</div>
                                <div>${order.taxPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Order Totals</strong></div>
                                <div><strong>${order.totalPrice}</strong></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

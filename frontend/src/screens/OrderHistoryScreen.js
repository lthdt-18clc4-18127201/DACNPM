import React from 'react'
import { useSelector } from 'redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen() {
    const orderMineList = useSelector(state => state.orderMineList);
    const {loading, error, orders} = orderMineList;


    return (
        <div>
            <h1>Order History</h1>
            {loading 
                ? (<LoadingBox />)
                : error
                    ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>PAID</th>
                                    <th>DELIVER</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                        </table>
                    )
                }
        </div>
    )
}

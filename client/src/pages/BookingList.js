import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersByUserId } from '../redux/actions/BookingAction'

function BookingList() {

    const orderstate = useSelector(state => state.getOrdersByUserIdReducer)
    const userdata = JSON.parse(localStorage.getItem('auth'))

    const { orders, error, loading } = orderstate

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(getOrdersByUserId())
            console.log(userdata[0]._id);
        } else {
            window.location.href = '/'
        }
    }, [dispatch])

    return (
        <Layout>
            <div style={{ marginTop: "120px" }} className="container">
                <h1 className='text-center'>Find your booking list here</h1>
                <div className="my-5 row justify-content-center">
                    <div className="col-md-10 table-responsive">
                        <table className='table table-hover table-stripped'>
                            <thead className='thead-dark bg-dark text-white'>
                                <tr>
                                    <th scope='col'>Order ID</th>
                                    <th scope='col'>Transaction ID</th>
                                    <th scope='col'>Bike name</th>
                                    <th scope='col'>Rent/hour</th>
                                    <th scope='col'>Fuel type</th>
                                    <th scope='col'>Total hours</th>
                                    <th scope='col'>Total Amount</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Payment Status</th>
                                    <th scope='col'>Delivery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!orders ? (
                                    <p>NO orders yet</p>
                                ) : (orders.map(order => {
                                    return <tr>
                                        <td>{order._id}</td>
                                        <td>{order.transactionId}</td>

                                        <td>{order.bikename}</td>
                                        <td>{order.rentPerHour}</td>
                                        <td>{order.fuelType}</td>
                                        <td>{order.totalhrs}</td>
                                        <td>₹{order.totalAmount}/-</td>

                                        <td>{moment(order.createdAt).format('dddd DD-MMM-YYYY, h:mm:ss a')}</td>


                                        <td>{order.isPaid ? (<h6><b>Payment Done</b> </h6>) : (<h6><b>Payment Pending</b> </h6>)}</td>
                                        <td>{order.isDelivered ? (<h6>Delivered</h6>) : (<h6>Order Placed</h6>)}</td>
                                    </tr>
                                }))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BookingList
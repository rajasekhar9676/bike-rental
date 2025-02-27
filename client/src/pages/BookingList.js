import React, { useEffect } from "react";
import Layout from "../components/Layout";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../redux/actions/BookingAction";

function BookingList() {
  const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the "auth" item from localStorage
  const auth = localStorage.getItem("auth");
  let userdata = null;

  // Check if the auth value is not null, "null", "undefined", or an invalid JSON string
  if (auth && auth !== "undefined" && auth !== "null") {
    try {
      userdata = JSON.parse(auth);
    } catch (e) {
      console.error("Invalid JSON string in localStorage for key 'auth'");
    }
  }

  useEffect(() => {
    if (userdata) {
      dispatch(getOrdersByUserId(userdata._id));
    } else {
      navigate("/");
    }
  }, [dispatch]);

  const { orders, error, loading } = orderstate;

  return (
    <Layout>
      <div style={{ marginTop: "120px" }} className="">
        <h1 className="text-center">Find your booking list here</h1>
        <div className="my-5 row justify-content-center">
          <div className="col-md-10 table-responsive">
            <table className="table table-hover table-stripped">
              <thead className="thead-dark bg-dark text-white">
                <tr className="text-center">
                  <th scope="col">Order ID</th>
                  <th scope="col">Bike name</th>
                  <th scope="col">Fuel </th>
                  <th scope="col">Total hours</th>
                  <th scope="col">Rent/hour</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Delivery Status</th>
                </tr>
              </thead>
              <tbody>
                {orders?.length === 0 ? (
                  <p className="text-center">NO orders yet</p>
                ) : (
                  orders.map((order) => {
                    return (
                      <tr className="text-center" key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.bikename}</td>
                        <td>{order.fuelType}</td>
                        <td>{order.totalhrs}</td>
                        <td>{order.rentPerHour}</td>
                        <td>${order.totalAmount}/-</td>
                        <td>
                          {moment(order.createdAt).format(
                            "dddd DD-MMM-YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td>
                          {order.isPaid ? (
                            <Link
                              className="text-decoration-none text-white"
                              to={`/payment/${order._id}`}
                            >
                              <h6 className="bg-success p-1 rounded">
                                <b>Payment Done</b>
                              </h6>
                            </Link>
                          ) : (
                            <Link
                              className="text-decoration-none text-white"
                              to={`/payment/${order._id}`}
                            >
                              <h6 className="bg-warning">
                                <b>Payment Pending</b>
                              </h6>
                            </Link>
                          )}
                        </td>
                        <td>
                          {order.isDelivered ? (
                            <h6>Delivered</h6>
                          ) : (
                            <h6>Order Placed</h6>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BookingList;

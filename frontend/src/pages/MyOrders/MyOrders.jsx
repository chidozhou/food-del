import { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  console.log("Fetched orders:", data); // Log the fetched orders for debugging

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          console.log("Order structure:", order); // Log each order's structure for debugging

          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {Array.isArray(order.items) && order.items.length > 0
                  ? order.items.map((item, itemIndex) => {
                      return (
                        <span key={itemIndex}>
                          {item.name} x {item.quantity}
                          {itemIndex < order.items.length - 1 ? ", " : ""}
                        </span>
                      );
                    })
                  : "No items available"}
              </p>
              <p>${order.total}.00</p>
              <p>
                Items: {Array.isArray(order.items) ? order.items.length : 0}
              </p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;

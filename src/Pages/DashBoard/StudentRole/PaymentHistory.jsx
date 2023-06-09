import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery(
    ["paymentHistory"],
    async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    }
  );
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Quantity</th>
              <th>Total Cost</th>
              <th>TransectionId</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.quantity}</td>
                <td>{user.price}</td>
                <td>{user?.transactionId}</td>
                {/* <th>{user.date}</th> */}
                <th>
                  {new Date(user.date).toLocaleString(
                    "en-US",
                    {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelecedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // how does reduce work!!!
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(cart);
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you wanted to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectClass/${id}`)
        .then((data) => {
          console.log(data.data)
          if(data.data.deletedCount > 0){
            refetch();
            Swal.fire("Deleted!", "This seleted Class has been deleted.", "success");
          }
        });

        
      }
    });
  };
  return (
    <div>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.classImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{user.className}</td>
                  <td>{user?.price}</td>
                  <th>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn bg-green-300 btn-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelecedClasses;

import React from "react";
import { Link } from "react-router-dom";

function OwnerDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen p-10">

      {/* Header */}
      <div className="text-center mb-12">

        <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-3">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold text-gray-800">
          Owner Dashboard
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Manage your store products, orders and customers.
        </p>

        <div className="mt-4 mx-auto w-20 h-1 bg-orange-500 rounded-full"></div>

      </div>



      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">


        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

          <h3 className="text-gray-500 text-lg">
            Total Products
          </h3>

          <p className="text-5xl font-bold text-orange-500 mt-3">
            0
          </p>

        </div>



        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

          <h3 className="text-gray-500 text-lg">
            Total Orders
          </h3>

          <p className="text-5xl font-bold text-orange-500 mt-3">
            0
          </p>

        </div>



        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

          <h3 className="text-gray-500 text-lg">
            Customers
          </h3>

          <p className="text-5xl font-bold text-orange-500 mt-3">
            0
          </p>

        </div>


      </div>





      {/* Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">



        {/* Products */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

          <div className="text-5xl mb-4">
            👕
          </div>


          <h2 className="text-2xl font-bold text-gray-800">
            Products
          </h2>


          <p className="text-gray-500 mt-3 mb-6">
            Add new clothes or manage existing products.
          </p>



          <Link to="/add-product">

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Add Product
            </button>

          </Link>



          <Link to="/products">

            <button className="w-full mt-3 border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-xl font-semibold transition">
              View Products
            </button>

          </Link>


        </div>






        {/* Orders */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">


          <div className="text-5xl mb-4">
            📦
          </div>


          <h2 className="text-2xl font-bold text-gray-800">
            Orders
          </h2>


          <p className="text-gray-500 mt-3 mb-6">
            Check customer orders and update their status.
          </p>


          <Link to="/orders">

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              View Orders
            </button>

          </Link>


        </div>







        {/* Customers */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">


          <div className="text-5xl mb-4">
            👥
          </div>


          <h2 className="text-2xl font-bold text-gray-800">
            Customers
          </h2>


          <p className="text-gray-500 mt-3 mb-6">
            View customers registered in your store.
          </p>


          <Link to="/customers">

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Customers List
            </button>

          </Link>


        </div>



      </div>


    </div>
  );
}

export default OwnerDashboard;
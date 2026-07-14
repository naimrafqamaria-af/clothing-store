import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import banner from "../Components/Assets/man banner.jpg";
import { CartContext } from "../Components/Context/CartContext";


const ProductCard = ({ item }) => {

  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);



  const handleAddToCart = () => {

    if (!selectedSize) {

      setError(true);

      setTimeout(() => {
        setError(false);
      },2000);

      return;
    }


    addToCart({
      ...item,
      size:selectedSize
    });


    setAdded(true);


    setTimeout(()=>{
      setAdded(false);
    },2000);

  };



  return (

    <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">


      <div className="overflow-hidden rounded-xl">

        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />

      </div>



      <h3 className="mt-4 font-semibold text-lg text-gray-800">
        {item.name}
      </h3>



      <p className="text-orange-500 font-bold text-lg">
        ${item.price}
      </p>




      <div className="mt-3">

        <p className="text-sm text-gray-500 mb-2 font-medium">

          Select Size

          {
            error &&
            <span className="text-red-500 font-semibold">
              {" "}— Please pick a size!
            </span>
          }

        </p>




        <div className="flex flex-wrap justify-center gap-2">


        {
          JSON.parse(item.sizes || "[]").map((size)=>(


            <button

            key={size}

            onClick={()=>setSelectedSize(size)}

            className={`
            px-3 py-1 rounded-full text-sm font-semibold border

            ${
              selectedSize===size

              ?

              "bg-orange-500 text-white border-orange-500 scale-110"

              :

              "bg-white text-gray-600 border-gray-300 hover:border-orange-400"
            }

            `}

            >

            {size}

            </button>


          ))
        }


        </div>


      </div>




      <button

      onClick={handleAddToCart}

      className={`
      mt-4 w-full py-2 rounded-xl font-semibold text-white

      ${
        added

        ?

        "bg-green-500"

        :

        "bg-orange-500 hover:bg-orange-600"
      }

      `}

      >

      {
        added
        ?
        "✓ Added to Cart!"
        :
        "Add to Cart"
      }


      </button>



    </div>

  );

};






const ShopCategory = () => {


const navigate = useNavigate();


const [products,setProducts] = useState([]);





useEffect(()=>{


axios.get("http://localhost:5000/products")

.then((res)=>{


const menProducts =
res.data.filter(
(product)=>product.category==="Men"
);


setProducts(menProducts);


})

.catch((err)=>{

console.log(err);

});


},[]);





return (

<div className="bg-gray-50 min-h-screen">



{/* Hero Banner */}

<div className="relative w-full h-[420px] overflow-hidden">


<img

src={banner}

alt="Men Collection Banner"

className="w-full h-full object-cover object-center"

/>



<div className="absolute inset-0 bg-black/45"/>




<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">


<p className="text-orange-400 uppercase tracking-[4px] text-sm font-semibold mb-3">

New Arrivals

</p>



<h1 className="text-white text-5xl font-bold mb-4">

Men's Collection

</h1>



<p className="text-gray-200 text-lg mb-8">

Bold, modern styles built for every occasion.

</p>




<button

onClick={()=>navigate("/")}

className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full"

>

Shop All Collections →

</button>



</div>


</div>





{/* Section Header */}

<div className="text-center py-10">


<h2 className="text-3xl font-bold text-gray-800">

Featured Pieces

</h2>



<p className="text-gray-400 mt-2 text-sm">

{products.length} items available

</p>



<div className="mt-3 mx-auto w-16 h-1 bg-orange-500 rounded-full"/>


</div>






{/* Products */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 pb-16">


{
products.map((item)=>(

<ProductCard

key={item.id}

item={item}

/>

))
}



</div>



</div>

);


};



export default ShopCategory;
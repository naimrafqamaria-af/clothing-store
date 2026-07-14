import React, { useState } from "react";
import axios from "axios";


function AddProduct() {


  const [product, setProduct] = useState({

    name: "",
    category: "",
    price: "",
    sizes: [],
    description: ""

  });


  const [imageFile, setImageFile] = useState(null);



  const sizesList = [

    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "2-3Y",
    "5-6Y",
    "7-8Y",
    "9-10Y"

  ];





  const handleChange = (e)=>{


    setProduct({

      ...product,
      [e.target.name]: e.target.value

    });


  };






  const handleSizeChange = (size)=>{


    if(product.sizes.includes(size)){


      setProduct({

        ...product,

        sizes: product.sizes.filter(
          item => item !== size
        )

      });


    }else{


      setProduct({

        ...product,

        sizes:[
          ...product.sizes,
          size
        ]

      });


    }


  };







  const handleSubmit = async(e)=>{


    e.preventDefault();



    if(!imageFile){

      alert("Please choose an image");

      return;

    }



    try{


      const formData = new FormData();



      formData.append(
        "name",
        product.name
      );


      formData.append(
        "category",
        product.category
      );


      formData.append(
        "price",
        product.price
      );



      formData.append(
        "sizes",
        JSON.stringify(product.sizes)
      );



      formData.append(
        "description",
        product.description
      );



      formData.append(
        "image",
        imageFile
      );






      await axios.post(

        "http://localhost:5000/add-product",

        formData,

        {

          headers:{

            "Content-Type":"multipart/form-data"

          }

        }

      );




      alert("Product added successfully!");




      setProduct({

        name:"",
        category:"",
        price:"",
        sizes:[],
        description:""

      });



      setImageFile(null);



    }



    catch(error){


      console.log(error);

      alert("Error adding product");


    }



  };








return (


<div className="bg-gray-50 min-h-screen p-10">


<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">



<div className="text-center mb-8">


<p className="text-orange-500 uppercase tracking-[3px] text-sm font-semibold">

Owner Panel

</p>



<h1 className="text-4xl font-bold text-gray-800 mt-3">

Add Product

</h1>


</div>







<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

value={product.name}

placeholder="Product Name"

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-4"

/>







<select

name="category"

value={product.category}

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-4"

>


<option value="">

Select Category

</option>



<option value="Men">

Men

</option>



<option value="Women">

Women

</option>



<option value="Kids">

Kids

</option>



</select>









<input

type="number"

name="price"

value={product.price}

placeholder="Price"

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-4"

/>









<input

type="file"

accept="image/*"

onChange={(e)=>
setImageFile(e.target.files[0])
}

className="w-full border p-3 rounded-xl mb-4"

/>








<textarea

name="description"

value={product.description}

placeholder="Product Description"

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-4"

/>








<div className="mb-5">


<p className="font-semibold mb-3">

Select Sizes

</p>




<div className="flex flex-wrap gap-2">



{

sizesList.map((size)=>(


<button


type="button"


key={size}


onClick={()=>handleSizeChange(size)}



className={

product.sizes.includes(size)

?

"bg-orange-500 text-white px-4 py-2 rounded-full"

:

"border px-4 py-2 rounded-full hover:border-orange-500"

}



>


{size}


</button>



))


}



</div>


</div>









<button


type="submit"


className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"


>


Add Product


</button>





</form>




</div>


</div>


);


}


export default AddProduct;
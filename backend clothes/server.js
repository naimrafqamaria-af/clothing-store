const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is working");
});


// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clothing_store",
});


db.connect((err) => {

  if (err) {
    console.log(err);
  } 
  else {
    console.log("✅ Connected to clothing_store database");
  }

});


// IMAGE UPLOAD

const storage = multer.diskStorage({

  destination: (req,file,cb)=>{
    cb(null,"uploads/");
  },


  filename:(req,file,cb)=>{

    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );

  }

});


const upload = multer({
  storage:storage
});


app.use("/uploads", express.static("uploads"));

// ================= CHECKOUT =================

app.post("/api/checkout", (req,res)=>{

  const {
    firstName,
    lastName,
    phone,
    address,
    postalCode,
    paymentMethod
  } = req.body;


  const sql = `
  INSERT INTO orders
  (first_name,last_name,phone,address,postal_code,payment_method)
  VALUES(?,?,?,?,?,?)
  `;


  db.query(
    sql,
    [
      firstName,
      lastName,
      phone,
      address,
      postalCode,
      paymentMethod
    ],

    (err)=>{

      if(err){
        console.log(err);
        return res.status(500).json("Database error");
      }


      res.json("Order saved successfully");

    }
  );


});




// ================= GET ORDERS =================

app.get("/api/orders",(req,res)=>{


  db.query(
    "SELECT * FROM orders ORDER BY id DESC",

    (err,result)=>{

      if(err){
        console.log(err);
        return res.status(500).json("Database error");
      }


      res.json(result);

    }
  );


});





// ================= SIGNUP =================


app.post("/signup", async(req,res)=>{


  try{

    const {
      name,
      email,
      password,
      role
    } = req.body;



    const hashedPassword =
      await bcrypt.hash(password,10);



    const sql =
    "INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)";



    db.query(
      sql,
      [
        name,
        email,
        hashedPassword,
        role
      ],


      (err)=>{


        if(err){

          console.log(err);

          return res.status(400)
          .json("Email already exists");

        }


        res.json("Account created successfully");


      }
    );


  }

  catch(error){

    console.log(error);

    res.status(500).json("Server error");

  }


});






// ================= LOGIN =================


app.post("/login",(req,res)=>{


const {
  email,
  password
}=req.body;



db.query(

"SELECT * FROM users WHERE email=?",

[email],


async(err,result)=>{


if(err){

return res.status(500).json("Database error");

}



if(result.length===0){

return res.status(404).json("User not found");

}



const user=result[0];



const match =
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.status(401).json("Wrong password");

}




const token =
jwt.sign(
{
id:user.id,
role:user.role
},
"secretkey",
{
expiresIn:"1d"
}
);



res.json({

message:"Login successful",
token,
role:user.role,
id:user.id,
name:user.name

});



});


});







// ================= FORGOT PASSWORD =================


app.post("/forgot-password",(req,res)=>{


const {email}=req.body;


const token =
crypto.randomBytes(20).toString("hex");



db.query(

"UPDATE users SET resetToken=? WHERE email=?",

[token,email],


(err,result)=>{


if(err){

return res.status(500).json("Database error");

}



if(result.affectedRows===0){

return res.json("Email doesn't exist");

}



res.json({

message:"Reset token created",
token

});


});


});








// ================= RESET PASSWORD =================


app.post("/reset-password",
async(req,res)=>{


const {
token,
newPassword
}=req.body;



const hashedPassword =
await bcrypt.hash(newPassword,10);



db.query(

"UPDATE users SET password=?, resetToken=NULL WHERE resetToken=?",

[
hashedPassword,
token
],


(err,result)=>{


if(err){

return res.status(500).json("Database error");

}



if(result.affectedRows===0){

return res.json("Invalid token");

}



res.json(
"Password changed successfully"
);



});


});








// ================= ADD PRODUCT =================


app.post(
"/add-product",
upload.single("image"),
(req,res)=>{


const {
name,
price,
category,
sizes,
description
}=req.body;



const image =
req.file
?
`http://localhost:5000/uploads/${req.file.filename}`
:
"";



const sql = `
INSERT INTO products
(name,price,category,sizes,image,description)
VALUES(?,?,?,?,?,?)
`;



db.query(

sql,

[
name,
price,
category,
sizes,
image,
description
],


(err)=>{


if(err){

console.log(err);

return res.status(500).json(
"Database error"
);

}



res.json(
"Product added successfully"
);



}

);


});







// ================= GET PRODUCTS =================


app.get("/products",(req,res)=>{


db.query(

"SELECT * FROM products ORDER BY id DESC",

(err,result)=>{


if(err){

console.log(err);

return res.status(500).json("Database error");

}



res.json(result);


}


);


});








// SERVER

app.listen(5000,()=>{

console.log(
"🚀 Server running on http://localhost:5000"
);

});
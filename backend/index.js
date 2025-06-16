const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser'); // cors and bodyparser are used to connect the 
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/Orders.Model");



// Establishing a mongoose connection
const PORT = process.env.PORT||8000;
const Uri = process.env.MONGO_URL;


app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://zerodhaa-frontend.netlify.app", 
    "https://zerodhaa-dashboard.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);


app.get("/allHoldings",async(req,res)=>{
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",async (req,res)=>{
  const allPositions =await  PositionsModel.find({});
  res.json(allPositions);
});


//  =========================== BUY STOCK ==================
app.post("/newOrder", async (req, res) => {
 
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});



app.listen(PORT,()=>{
  console.log(`listening to port ${PORT}`);
  mongoose.connect(Uri)
  console.log("DB connected"); 
});





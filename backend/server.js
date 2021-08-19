const express = require('express');
const cors = require('cors');
const db = require('./db/db');
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")

const roleRouter = require('./routers/routes/role');
const usersModel=require('./routers/routes/user')
const restaurantModel = require("./routers/routes/restaurant")
const ratingModel=require("./routers/routes/review")
const menuModel=require("./routers/routes/menu")
const loginModel=require("./routers/routes/login")
const app = express();

//routers

//built-in middlewares
app.use(express.json());
app.use(cors());
app.use(roleRouter);
app.use(usersModel)
app.use(restaurantModel)
app.use(ratingModel)
app.use(menuModel)
app.use(loginModel)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//third-party middleware

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "hackers company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

//app routers

const PORT =5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

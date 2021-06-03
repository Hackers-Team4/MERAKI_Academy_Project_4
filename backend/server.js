const express = require('express');
const cors = require('cors');
const db = require('./db/db');



const roleRouter = require('./routers/routes/role');
const usersModel=require('./routers/routes/user')
const restaurantModel = require("./routers/routes/restaurant")


const app = express();

//routers

//built-in middlewares
app.use(express.json());
app.use(roleRouter);
app.use(usersModel)
app.use(restaurantModel)


//third-party middleware
app.use(cors());

//app routers

const PORT =5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

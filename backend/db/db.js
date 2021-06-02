const mongoose = require('mongoose');
//require('dotenv').config();

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

// connecting mongoose
mongoose.connect("mongodb://localhost:27017/Hackers_DB", options).then(
	() => {
		console.log('DB Ready To Use');
	},
	(err) => {
		console.log(err);
	},
);

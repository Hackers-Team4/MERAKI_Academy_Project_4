const mongoose = require('mongoose');
//require('dotenv').config();

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

// connecting mongoose
mongoose.connect("mongodb+srv://admin:123@cluster0.zgthb.mongodb.net/project4?retryWrites=true&w=majority", options).then(
	() => {
		console.log('DB Ready To Use');
	},
	(err) => {
		console.log(err);
	},
);

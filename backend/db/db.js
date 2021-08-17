const mongoose = require('mongoose');
//require('dotenv').config();

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
// mongodb://<username>:<password>@clustermasjeed1-shard-00-00-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-01-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-02-ekpfe.mongodb.net:27017/test?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true

// connecting mongoose
mongoose.connect("mongodb+srv://admin:123@cluster0.zgthb.mongodb.net/project4?retryWrites=true&w=majority&ssl=true", options).then(
	() => {
		console.log('DB Ready To Use');
	},
	(err) => {
		console.log(err);
	},
);

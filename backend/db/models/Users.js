const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


const Users = new mongoose.Schema({
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: { type: mongoose.Schema.ObjectId, ref: 'role' }

});
const salt = 10;
Users.pre("save", async function(err,hash){
    this.email=this.email.toLowerCase();
    const hashedPassword = await bcrypt.hash(this.password , salt)
    this.password=hashedPassword;
})

Users.pre("findOneAndUpdate", async function(err,hash){
    console.log(this._update.password,"pre",this.email,"pass",this.password)
    this.email=this._update.email.toLowerCase();
    const hashedPassword= await bcrypt.hash(this._update.password , salt)
    this._update.password=hashedPassword;
})
Users.statics.authenticateBasic = async function (email, password) {
	console.log("hiiiiii")
	try {
		const user = await this.findOne({ email });
		if (!user) return ["The email doesn't exist", 404];

		const valid = await bcrypt.compare(password, user.password);
		
		if (valid) {
			const payload = {
				firstName: user.firstName,
				phoneNumber: user.phoneNumber,
				role: user.role,
			};
			console.log("payload",payload,"secret",process.env.SECRET)
			const options = {
				expiresIn: '60m',
			};
                 
			return [jwt.sign(payload, process.env.SECRET, options), 200];
		}
		return ['The password you’ve entered is incorrect', 403];
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = mongoose.model('users', Users);








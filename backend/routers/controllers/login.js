const usersModel = require('./../../db/models/Users');

const login = (req, res) => {
    const { email, password } = req.body;
     let userData;
    usersModel.find({email})
   .then((result) => {
        console.log("result email ",result[0])
        userData=result[0];
        console.log("result email newww",userData)
    })
 
    usersModel.authenticateBasic(email, password)
        .then((result) => {
            console.log(result)
            if (result[1] === 200)
                return res.status(result[1]).json({ token: result[0],userData});
                res.status(result[1]).json(result[0]);
        })
        .catch((err) => {
            res.send(err);
        });
};

module.exports = {
    login,
};
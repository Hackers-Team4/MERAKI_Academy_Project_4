const app=require('./server');
const db = require("./db/db");
// const PORT =5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
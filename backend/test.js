const mongoose = require('mongoose');
const app = require('./server');
const superTest = require("supertest");
const Users = require("./db/models/Users")
const menu = require("./db/models/Menu");


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
mongoose.connect("mongodb://localhost:27017/Testing", options)
beforeAll(async () => {
    await Users.remove()
    // await Product.remove()
});
afterEach(async () => {
    await Users.remove();
    // await Product.remove()
})
afterAll(async () => {
    await Users.remove();
    // await Product.remove()
    await mongoose.connection.close()
});
test('should', () => {
    expect(2).toBe(2)
})

describe("user module test",()=>{
it ("cheak if the module definde",()=>{
    expect(Users).toBeDefined();
})
it(" should save a User", async () => {
    const userInfo = {
    firstName:"roaa",
    LastName:"maghaydah",
    dateOfBirth:"24/12/1997",
    gender:"femal",
    phoneNumber:"0123455",
    image:"url",
    email:"roaa@gm",
    password:"123",
    }
    const user = new Users(userInfo);
    await user.save();
    const checkUser = await Users.findOne({ LastName: "maghaydah" })

    expect(checkUser.firstName).toBe(userInfo.firstName)
})
})

describe(" testing User APIS", () => {
    const user = { firstName:"roaa",
    LastName:"maghaydah",
    dateOfBirth:"24/12/1997",
    gender:"femal",
    phoneNumber:"0123455",
    image:"url",
    email:"roaa@gm",
    password:"123",
    }
    it(" should able to create a user", async () => {
        const newUser = await superTest(app).post("/register").send(user);
        expect(typeof newUser.body).toEqual(typeof user);
        expect(newUser.body).toHaveProperty("_id");
        expect(newUser.statusCode).toBe(201);
    })
})

describe("user module test",()=>{
    it ("cheak if the module definde",()=>{
        expect(Users).toBeDefined();
    })
    it(" should save a User", async () => {
        const menuInfo = { mainCourse:["food1","food2"],drinks:["food1","food2"],dessert:["food1","food2"]
        };
        const me = new menu(menuInfo);
        await me.save();
        const checkMenu = await menu.findOne({ mainCourse: ["food1","food2"]})

        expect(checkMenu.mainCourse[0]).toBe(menuInfo.mainCourse[0])
    })
    })

    describe(" testing User APIS", () => {
        const menu1 = { mainCourse:["food1","food2"],drinks:["food1","food2"],dessert:["food1","food2"]}
        it(" should able to create a new  menu", async () => {
            const newMenu = await superTest(app).post("/menu").send(menu1);
            expect(typeof newMenu.body).toEqual(typeof menu1);
            expect(newMenu.body).toHaveProperty("_id");
            expect(newMenu.statusCode).toBe(201);
        })
    })







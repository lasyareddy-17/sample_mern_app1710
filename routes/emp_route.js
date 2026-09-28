let express = require("express");
let router = express.Router();
let bcrypt = require("bcrypt");
let { users } = require("../models/users");

router.post("/register", async (req, res) => {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let newuser = users(req.body);
    let result = await newuser.save();
    res.send(result);
})

router.post("/login", async (req, res) => {
    let result = await users.findOne({ email: req.body.email })
    // result.password = undefined;//skip the password and give next features
    if (result) {
        let matchpass = await bcrypt.compare(req.body.password, result.password);
        if (matchpass) {
            res.send("login successfully");
        } else {
            res.send("login failed");
        }
    } else {
        res.send("user not found");
    }
    res.send(result);
})

router.post("/view task", (req, res) => {
    res.send("view task page called");
})

router.post("/updatestatus", (req, res) => {
    res.send("updatestatus page called");
})

router.patch("/updateprofile/:id", async (req, res) => {
    let data = req.body;
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    let result = await users.findByIdAndUpdate(req.params.id, data, { new: true });
    res.send(result);
})

module.exports = router;
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const {username , password } = req.body;
    bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            username : username,
            password : hash,
        });
        res.json('SUCCESS');
    });
});

router.post("/login", async (req,res) =>{
    const {username,password} = req.body;

    const user = await Users.findOne({ where :{ username : username } });

    if (!user) res.json({error:"User doesn't Exist"});

   const user1 = await Users.findOne({where:{password:password}});

    if(user){
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) res.json({ error: "Wrong Username And Password Combination" });

            if(match) res.json("You Logged In");
          });
    }


});

module.exports = router;

const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.get('/test', (req, res) => {
    res.send({ mess: 'working your backhand and ok safasdasd' })
})

router.post('/login', async (req, res) => {
    const userInfo = req.body;
    console.log("BOdy===>", userInfo);
    //check email
    const user = await User.findOne({ email: userInfo.email, password: userInfo.password });
    console.log('Usersss***', user)

    if (!user) {
        // res.send({ message: "Invalid email or password!1" });
        // errors.email = "User not found";
        res.status(404).json({ message: "Invalid email or password!1" });
        // stop further execution in this callback
        return;
    }

    res.send({ user });

})


router.post('/getUser', (req, res) => {
    //req.params.id
    const email = req.body.email;
    const password = req.body.password;

    // const users = Users.find({ email });
    const users = Users.find({ password })

    users.then((allUsers) => {
        res.send({ result: allUsers })
    }).catch(e => {
        res.send({ message: e.message });
    })
})



router.post('/addUser', (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    newUser.save()
        .then(() => {
            res.send({ message: 'user added Successfully', user: user })
        }).catch(e => {
            console.log('Error ===>', e)
            res.send({ message: e.message })
        })

})

module.exports = router;
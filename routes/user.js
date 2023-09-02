const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send("your username e gata: " + username);
});

module.exports = router
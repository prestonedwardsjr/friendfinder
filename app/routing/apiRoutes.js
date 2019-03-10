var friendData = require("../data/friendData");
var router = require("express").Router();
var path = require("path");

router.get("/api/friends", function(req, res) {
  res.json(friendData);
});
app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
    res.json(true);
  }
  );
module.exports = router;
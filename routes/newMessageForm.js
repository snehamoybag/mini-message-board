const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("form", { title: "Add New Message" });
});

module.exports = router;

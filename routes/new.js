const { Router } = require("express");
const newController = require("../controllers/newController");

const router = Router();

router.get("/", newController.get);
router.post("/", newController.messagePost);

module.exports = router;

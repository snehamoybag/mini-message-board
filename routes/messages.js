const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const router = new Router();

router.get("/message/:id", messagesController.messageGet);

module.exports = router;

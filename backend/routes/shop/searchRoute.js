const express = require("express");

const { search } = require("../../controllers/shop/searchcontroller");
const router = express.Router();

router.get("/:keyword", search);

module.exports = router;

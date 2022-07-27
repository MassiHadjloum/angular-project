const express = require("express");
const {
  getArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle,
} = require("../controller/controller");

const router = express.Router();

router.route("/articles").get(getArticles);
router.route("/articles/:id").get(getArticle);
router.route("/articles").post(addArticle);
router.route("/articles/:id").put(updateArticle);
router.route("/articles/:id").delete(deleteArticle);

module.exports = router;

const connectDB = require("../database/connect");
const mysql = require("mysql");

// @desc        Get all articles
// @route       GET /api/articles
// @access      Public
exports.getArticles = (req, res, next) => {
  console.log("get article ", req.url);
  connectDB.query("SELECT * FROM article", (err, result) => {
    if (err) throw err;
    res.status(200).json({ /* success: true, */ data: result });
  });
};

// @desc        Get single article
// @route       GET /api/articles/:id
// @access      Public

exports.getArticle = (req, res, next) => {
  const id = req.params["id"];
  console.log("get article by id", req.url, "id ", id);
  connectDB.query(
    "SELECT * FROM article WHERE article.id = " + mysql.escape(id),
    (err, result) => {
      if (err) {
        res.status(400).json({ success: false, data: [] });
      }
      res.status(200).json({ success: true, data: result });
    }
  );
};

// @desc        Update single article
// @route       PUT /api/articles/:id
// @access      Public

exports.updateArticle = (req, res, next) => {
  const id = req.params["id"];
  const article = req.body;
  const params = [article.titre, article.description, article.published];
  //const sql = `UPDATE article SET titre = '${article.titre}' AND description = '${article.description}' AND published = ${article.published} WHERE id = ?`;
  const sql = `UPDATE article SET ? WHERE id = ?`;
  console.log("update article by id", article, "id ", id);
  try {
    connectDB.query(sql, [article, id], (err, result) => {
      res.status(201).json({ success: true, data: result });
    });
  } catch (e) {
    res.status(400).json({ success: false, data: [] });
    console.log(err.message);
  }
};

// @desc        Delete single article
// @route       delete /api/articles/:id
// @access      Public

exports.deleteArticle = (req, res, next) => {
  const id = req.params["id"];
  const sql = "DELETE FROM article WHERE article.id = ?";
  console.log("delete article by id", id);
  connectDB.query(sql, [id], (err, result) => {
    if (err) {
      res.status(400).json({ success: false, data: [] });
    }
    res.status(200).json({ success: true });
  });
};

// @desc        Add single article
// @route       delete /api/articles/:id
// @access      Public

exports.addArticle = (req, res, next) => {
  const article = req.body;
  const params = [
    article.titre,
    article.description,
    article.published ? 1 : 0,
  ];
  const sql = "INSERT INTO article (titre, description, published) VALUEs (?)";
  console.log(params, article);
  connectDB.query(sql, [params], (err, result) => {
    if (err) {
      res.status(400).json({ success: false, data: [] });
      throw err;
    }
    res.status(200).json({ success: true });
  });
};

// schema & model

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  ISBN: String,
  yearOfPublication: Number,
  edition: Number,
  genre: String,
  ageGroup: String,
  topic: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

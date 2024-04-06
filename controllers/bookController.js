// controller logic

const Book = require("../models/Book");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  addBook: async (req, res) => {
    try {
      const {
        title,
        author,
        ISBN,
        yearOfPublication,
        edition,
        genre,
        ageGroup,
        topic,
      } = req.body;
      const newBook = new Book({
        title,
        author,
        ISBN,
        yearOfPublication,
        edition,
        genre,
        ageGroup,
        topic,
      });
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateBook: async (req, res) => {
    try {
      const {
        title,
        author,
        ISBN,
        yearOfPublication,
        edition,
        genre,
        ageGroup,
        topic,
      } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        {
          title,
          author,
          ISBN,
          yearOfPublication,
          edition,
          genre,
          ageGroup,
          topic,
        },
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json({ message: "Book deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = bookController;

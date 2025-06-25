import mongoose from "mongoose";
import Book from "./model/book.model.js";
import fs from "fs";

const URI = "mongodb+srv://deepakdharmode:deepak1234@cluster0.wqqj2mh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function seedBooks() {
  await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const books = JSON.parse(fs.readFileSync("./public/list.json", "utf-8"));
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("Books seeded!");
  mongoose.disconnect();
}

seedBooks();
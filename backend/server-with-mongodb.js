import { createApp } from "./index.js";
import { BookModel } from "./models/mongodb/bookModel.js";

createApp({bookModel: BookModel})
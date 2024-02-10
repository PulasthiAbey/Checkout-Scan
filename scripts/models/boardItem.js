const mongoose = require("mongoose");

const boardItemSchema = new mongoose.Schema({
  itemId: String,
  columnName: String,
  columnValue: String,
});

const BoardItem = mongoose.model("BoardItem", boardItemSchema);

module.exports = BoardItem;

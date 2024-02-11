const mongoose = require("mongoose");

const boardItemSchema = new mongoose.Schema({
  itemId: String,
  columnName: String,
  columnValue: String,
});

const BoardItem = mongoose.model("Board_Item", boardItemSchema);

module.exports = BoardItem;

const express = require("express");
const router = express.Router();

const BoardItem = require("../models/boardItem");

router.post("/", (req, res) => {
  const { event } = req.body;
  
  if (event.type === "change_column_value") {
    const { itemId, columnName, columnValue } = event.data;
    
    const newBoardItem = new BoardItem({
      itemId,
      columnName,
      columnValue,
    });
    newBoardItem
      .save()
      .then(() => {
        console.log("Board item saved to MongoDB");
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error("Error saving board item to MongoDB:", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(200);
  }
});

module.exports = router;

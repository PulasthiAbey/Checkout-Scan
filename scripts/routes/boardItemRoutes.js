const express = require("express");
const router = express.Router();

const BoardItem = require("../models/boardItem");
const { mondayHelper } = require("../helpers");

router.post("/create", (req, res) => {
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

router.post("/scanned", (req, res) => {
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

router.post("/update-status", async (req, res) => {
  const { event } = req.body;
  if (event.type === "qr_code_scanned") {
    const { itemId, scannedBy } = event.data;
    try {
      await mondayHelper.updateItemStatus(itemId, "Delivered");

      const boardItem = await BoardItem.findOne({ itemId });
      if (boardItem) {
        boardItem.status = newStatus;
        await boardItem.save();
      } else {
        await BoardItem.create({ itemId, status: newStatus });
      }

      console.log("Item status updated:", response.data);

      res.sendStatus(200);
    } catch (error) {
      console.error("Error updating item status:", error);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(200);
  }
});

router.get("/openItemView/:itemId", async (req, res) => {
  const { itemId } = req.params;
  const photoUploadUrl = `https://your-photo-upload-url/${itemId}`;

  // Generate URL to open item view with pre-filled photo upload URL
  const itemViewUrl = `https://your-monday-board-url/${itemId}?photoUploadUrl=${encodeURIComponent(
    photoUploadUrl
  )}`;

  res.redirect(itemViewUrl);
});

module.exports = router;

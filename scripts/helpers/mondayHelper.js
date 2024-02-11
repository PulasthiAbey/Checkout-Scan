const axios = require("axios");

const helper = {
  updateMondayStatus: async () => {
    const apiUrl = `https://api.monday.com/v2`;
    const apiKey = "YOUR_API_KEY";

    try {
      const response = await axios.put(
        `${apiUrl}/items/${itemId}`,
        {
          update: {
            status: newStatus,
          },
        },
        {
          headers: {
            Authorization: apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Item status updated:", response.data);
    } catch (error) {
      console.error("Error updating item status:", error);
      throw error;
    }
  },
};

module.exports = helper;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const putRes = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": process.env.PRIVATE_KEY } }
    );
    return res.status(putRes.status).json(putRes.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);

// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const clientId = "5cc81baedb7f48c586190ca5c462bd88";
const clientSecret = "089dd32f162047d7b7bafb7518eb05f7";

app.get("/get-token", async (req, res) => {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.json({ access_token: response.data.access_token });
  } catch (error) {
    console.error("🔥 토큰 요청 실패:", error.message);
    res.status(500).send("Token fetch failed");
  }
});

app.listen(3000, () => {
  console.log("✅ 서버 실행 중: http://localhost:3000");
});

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeMALPage(limit) {
  const url = `https://myanimelist.net/anime/genre/24/Sci-Fi?limit=${limit}`;
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
  };

  try {
    const { data: html } = await axios.get(url, { headers });
    const $ = cheerio.load(html);
    const animeList = [];

    $("div.seasonal-anime").each((i, el) => {
      const title = $(el).find("div.title a").text().trim();
      const rating = $(el).find("span.js-score").text().trim() || "N/A";
      const fulldate = $(el).find("span.js-start_date").text().trim();
      const start_year = fulldate.slice(0, 4);
      const genre = ["Staj"];

      animeList.push({ title, rating, genre, start_year, type: "anime" });
    });

    return animeList;
  } catch (err) {
    console.error(`Failed to scrape MAL page ${limit}:`, err.message);
    return [];
  }
}
function saveToJson(data, filename = "sci-fi.json") {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

async function runBot() {
  const allData = [];
  const pagesToScrape = 3;

  for (let i = 0; i < pagesToScrape; i++) {
    const limit = i * 100;
    const pageData = await scrapeMALPage(limit);
    allData.push(...pageData);
  }

  saveToJson(allData);
}

runBot();

const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeIMDBPage(start) {
  const url = `https://www.imdb.com/search/title/?genres=action&title_type=feature&start=${start}`;
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36"
  );
  await page.setViewport({ width: 1366, height: 768 });

  await page.goto(url, { waitUntil: "networkidle2" });

  const movies = await page.evaluate(() => {
    const results = [];
    const items = document.querySelectorAll(".lister-item.mode-advanced");

    items.forEach((item) => {
      const title = item.querySelector("h3 > a")?.innerText || null;
      const year = item.querySelector(".lister-item-year")?.innerText || null;
      const rating =
        item.querySelector(".ratings-imdb-rating strong")?.innerText || null;
      const runtime = item.querySelector(".runtime")?.innerText || null;
      const genre = item.querySelector(".genre")?.innerText?.trim() || null;

      if (title) {
        results.push({ title, year, rating, runtime, genre, type: "movie" });
      }
    });

    return results;
  });

  await browser.close();
  return movies;
}

function saveToJson(data, filename = "movies.json") {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`✅ Saved ${data.length} movies to ${filename}`);
}

async function runBot() {
  const pagesToScrape = 2;
  const allData = [];

  for (let i = 0; i < pagesToScrape; i++) {
    const start = i * 50 + 1;
    const pageData = await scrapeIMDBPage(start);
    allData.push(...pageData);
    console.log(`📦 Scraped ${pageData.length} movies from page ${i + 1}`);
  }

  saveToJson(allData);
}

runBot();

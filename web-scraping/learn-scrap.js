const rp = require('request-promise');
const $ = require('cheerio');
const url = "https://www.cricbuzz.com/live-cricket-scorecard/35673/rr-vs-kkr-18th-match-indian-premier-league-2021";

rp(url)
.then((html)=> {
  console.log($('a.cb-text-link', html).length);
  console.log($('a.cb-text-link', html));
})
.catch((err)=>console.log(err));



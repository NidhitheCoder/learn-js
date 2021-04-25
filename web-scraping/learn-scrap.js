const rp = require('request-promise');
const $ = require('cheerio');
const url = "https://friction-bring.clodui.com/";
rp(url)
.then((html)=> {
  console.log( $('li a.nav-anchor', html).length);
  console.log( $('li a.nav-anchor', html));
  console.log( $('li a', html));
  console.log( $('.card-item h4'))
})
.catch((err)=>console.log(err));



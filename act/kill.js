const fs = require("fs");

const dataP = __dirname.replace('act', 'data');
var ws = require('windows-shortcuts');

console.log("- killing wu -");
fs.writeFile(dataP+'/heart.wu', "dead", 'utf-8', function(err, data) {
  if (err) throw err;
  console.log("- done -");
});
//also disable DiscordI

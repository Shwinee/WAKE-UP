const readline = require("readline");
const fs = require("fs");


fs.readdir(__dirname+'/dna', (err, files) => {
  files.forEach(file => {
    fs.unlinkSync(__dirname+'/dna/'+file);
  });
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("- wu installer -");

var infections = [];

rl.question("- download discord infection? (y/n) -", function(response) {
  if (response == 'y'){
    infections.push("discord");
  }
  rl.question("- download desktop infection? (y/n) -", function(response) {
    if (response == 'y'){
      infections.push("desktop");
    }
    rl.close();
  });
});

rl.on("close", function() {
  console.log(`- infections -`);
  for (var i = 0; i < infections.length; i++) {

    console.log(`- ${infections[i]} infection-`);
    fs.writeFile(__dirname+'/dna/'+infections[i]+'.wu', '1', 'utf-8', function(err, data) {
      if (err) throw err;
      console.dir(`- installed ${infections[i]}-`);
    });
  }

  console.log(`- total of ${infections.length} infections-`);
});

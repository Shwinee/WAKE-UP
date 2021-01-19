console.log("starting WU (wake up)");
const fs = require("fs");

const dataP = __dirname.replace('act', 'data');

//make sure wu is alive.
console.log(fs.readFileSync(dataP+"/heart.wu").toString());
if (fs.readFileSync(dataP+"/heart.wu").toString().includes("dead")){
  //wu is dead, resurrecting
  console.log("- wu is dead, resurrecting -");

  fs.writeFile(dataP+'/heart.wu', "alive", 'utf-8', function(err, data) {
    if (err) throw err;
  });
}else{
  console.log("- wu is alive -");
}

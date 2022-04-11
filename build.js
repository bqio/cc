require("dotenv").config();
const AdmZip = require("adm-zip");
const config = require("./config");
const fs = require("fs");
const path = require("path");

function applyBuild() {
  const zip = new AdmZip(`${process.env.GAME_PATH}\\data\\lang.dat`);
  for (let entry of config.entries) {
    const basename = path.basename(entry.path);
    zip.addLocalFile(`build\\${basename}`);
  }
  zip.writeZip();
}

function applyGlossary() {
  for (let entry of config.entries) {
    let data = fs.readFileSync(entry.path, { encoding: entry.enc });
    for (let g of config.glossary) {
      const reg = new RegExp(g[0], "g");
      data = data.replace(reg, g[1]);
      console.log(`Apply ${g[0]} to ${g[1]} in ${entry.path} [${entry.enc}]`);
    }
    const dist = `build/${path.basename(entry.path)}`;
    fs.writeFileSync(dist, data, { encoding: entry.enc });
    console.log(
      "============================================================="
    );
  }
}

function applyPatches() {
  for (let patch of config.patches) {
    const patch_arch = patch.dist.split("/")[0];
    const zip = new AdmZip(`${process.env.GAME_PATH}\\data\\${patch_arch}.dat`);
    let pathes = patch.dist.split("/");
    pathes.splice(0, 1);
    zip.addLocalFile(`patches\\${patch.entry}`, pathes.join("/"));
    zip.writeZip();
    console.log(`Apply patch ${patch.entry} in ${patch.dist}`);
    console.log(
      "============================================================="
    );
  }
}

console.log("Build started.");
applyGlossary();
applyPatches();
applyBuild();
console.log(`Successfully building`);

require("dotenv").config();
const AdmZip = require("adm-zip");
const config = require("./config");
const fs = require("fs");
const path = require("path");

async function createZip() {
  try {
    const zip = new AdmZip();
    const out = "lang.zip";
    zip.addLocalFolder("./build");
    zip.writeZip(`${process.env.GAME_PATH}data\\${out}`);
    console.log(`Created ${out} successfully`);
  } catch (error) {
    console.log(error);
  }
}

async function applyGlossary() {
  for (let entry of config.entries) {
    let data = fs.readFileSync(entry, { encoding: "utf8" });
    for (let g of config.glossary) {
      const reg = new RegExp(g[0], "g");
      data = data.replace(reg, g[1]);
    }
    const dist = `build/${path.basename(entry)}`;
    fs.writeFileSync(dist, data, { encoding: "utf8" });
  }
}

applyGlossary();
createZip();

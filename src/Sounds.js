const fs = require("fs");

const dir = `${__dirname}/../public/sounds`;
const files = fs.readdirSync(dir);
let sounds = [];

let index = 0;
for (const file of files) {
  sounds.push({
    id: index++,
    name: file.split(".")[0],
  });
}

fs.writeFile("./sounds.json", JSON.stringify(sounds), (err) => {
  if (err) console.log(err);
});

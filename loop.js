const fs = require("fs");

for (let index = 0; index < 70; index++) {
  fs.copyFile("source.txt", "destination.txt", (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
}

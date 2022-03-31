const fs = require("fs");

for (let index = 0; index < 70; index++) {
  fs.copyFile("src/Entity/Cat.php", `src/Entity/Cat${index + 1}.php`, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
}

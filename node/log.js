const file = require("fs");
const date = new Date();
data = `\n program is exwcuted on ${date}`;
file.appendFile("./log.txt", data, (error) => {
  if (error) console.log("an error coused while logging the file"+error);
});

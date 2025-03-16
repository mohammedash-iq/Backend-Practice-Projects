const file = require("fs");
const date = new Date();
file.readFile("./log.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error+"\n file cannot be read")
    }
  data = data + "\n program is exwcuted on " + date;
  file.writeFile("./log.txt", data, (error) => {
    if (error) {
      console.log(error+"file cannot be written");
    }
  });
});

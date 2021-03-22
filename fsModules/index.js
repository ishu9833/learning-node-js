const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    //async

    //read files

    // fs.readFile("Home.html", function (error, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });

    //write file

    // fs.writeFile("demo.txt", "Hello I am a node js developer", (error) => {
    //   if (error) {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("file not write well!");
    //     res.end();
    //   } else {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("file write well well well!");
    //     res.end();
    //   }
    // });

    //rename file

    // fs.rename("demo.txt", "newWorld.txt", (error) => {
    //   if (error) {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("file name does not changed!");
    //     res.end();
    //   } else {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("Congrz!  file name changed!");
    //     res.end();
    //   }
    // });

    //delete file

    // fs.unlink("newWorld.txt", (error) => {
    //   if (error) {
    //     res.writeHead(200, {"Content-Type": "text/html"});
    //     res.write("file deleted unsuccessful");
    //     res.end();
    //   } else {
    //     res.writeHead(200, {"Content-Type":"text/html"});
    //     res.write("wow! file deleted successful");
    //     res.end();
    //   }
    // });

    //sync

    // read file

    // const myData = fs.readFileSync("Home.html");
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(myData);
    // res.end();

    //write file

    // const error = fs.writeFileSync(
    //   "demoNew.txt",
    //   "Hey I assigned synchronous way."
    // );
    // if (error) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("file not write well!");
    //   res.end();
    // } else {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("Whoo! file write well well well!");
    //   res.end();
    // }

    //rename file
    // const result = fs.renameSync("demoNew.txt", "newWorldSync");
    // if (result) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("file name does not changed!");
    //   res.end();
    // } else {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("yahhhh! file name changed!");
    //   res.end();
    // }

    //delete file
    const error = fs.unlinkSync("newWorldSync");
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("file deleted unsuccessful");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("wow! file deleted successful");
      res.end();
    }
  }
});

server.listen(4040);
console.log("server running!");

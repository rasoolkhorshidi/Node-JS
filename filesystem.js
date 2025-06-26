import { unlink, readdir, access, constants } from "fs";
// let fileText = "hello world";

// fs.readFile("./docs/test3.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fileText = data.toString();
//   }
// });

// fs.writeFile("./docs/test3.txt", fileText, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file was written");
//   }
// });

// fs.appendFile("./docs/test3.txt", " hello again", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file was appended");
//   }
// });

//create directory ./assets
// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });
//remove directory ./assets
// fs.rmdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder removed");
//   }
// });

//delete file ./docs/test3.txt
unlink("./docs/test3.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted");
  }
});
//read directory ./docs
readdir("./docs", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    files.forEach((file) => {
      console.log(file);
    });
  }
});
//check if file exists
access("./docs/test2.txt", constants.F_OK, (err) => {
  if (err) {
    console.log("File does not exist");
  } else {
    console.log("File exists");
  }
});
//check if file is readable
access("./docs/test2.txt", constants.R_OK, (err) => {
  if (err) {
    console.log("File is not readable");
  } else {
    console.log("File is readable");
  }
});

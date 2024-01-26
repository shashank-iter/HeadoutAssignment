const fs = require("fs");
const path = require("path");

exports.returnfile = async (req, res) => {
  const DATA_DIR = path.join(__dirname, "../tmp/data"); 
  // absolute path to the data directory
  console.log(DATA_DIR);
  const { n, m } = req.query;
  if (!n) {
    return res.status(400).send('Parameter "n" is required');
  }

  const filePath = path.join(DATA_DIR, `${n}.txt`);
  console.log(filePath);
  // satetment to check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send(`File ${n}.txt not found`);
  }

  // this statement is for reading the content inside the file
  const fileContent = fs.readFileSync(filePath, "utf8");

  // If m is provided, return specific line, otherwise return entire content
  if (m) {
    const lines = fileContent.split("\n");
    const lineNumber = parseInt(m, 10) - 1;

    if (lineNumber < 0 || lineNumber >= lines.length) {
      return res.status(400).send("Invalid line number");
    }

    return res.send(lines[lineNumber]);
  } else {
    return res.send(fileContent);
  }
};

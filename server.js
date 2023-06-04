const express = require("express");
const app = express();
const port = 8000;
const referenceExample = require("./referenceExample");
const embeddedExample = require("./embeddedExample");

// referenceExample();
embeddedExample();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("bin/Debug/net7.0/browser-wasm/AppBundle/"));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
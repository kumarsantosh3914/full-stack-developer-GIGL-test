const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
});

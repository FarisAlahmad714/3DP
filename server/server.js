const port = 8000;
const db_name = "3DP";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());
// req.body undefined without this!

app.use(express.json());

require("./routes/3DP.routes")(app);

app.listen(port, () => {
  console.log(`Listening for requests on port ${port} to respond to.`);
});

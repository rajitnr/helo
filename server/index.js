const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const bc = require("./controller.js");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
    dbInstance
      .setup_tables()
      .then(response => {
        console.log("All tables setup");
      })
      .catch(error => {
        console.log("Error encountered in setup", error);
      });
  })
  .catch(error =>
    console.log("Error in massive setup", error, process.env.CONNECTION_STRING)
  );

app.use(bodyParser.json());
app.use(cors());

app.post("/api/user", bc.createUser);
app.get("/api/users", bc.readUsers);
app.post("/api/authenticate", bc.authenticateUser);

let PORT = process.env.SERVER_PORT || "3005";
app.listen(PORT, () => {
  console.log("App is listening ", { PORT });
});

const expresss = require("express");
const app = expresss();

const connectDb = require("./db/connection");
const constants = require("./constants");

connectDb();

app.use(expresss.json({ extended: false }));
app.use("/api/user", require("./routes/user"));
app.listen(constants.port, () => {
  console.log(`Server Started at ${constants.port}`);
});

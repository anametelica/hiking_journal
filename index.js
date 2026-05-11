import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => { // /generate_name
    //
  res.render("index.ejs", {
//
  });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//if post submit (name, date, text) is not empty then
// create a location "/" based on first word of name and date
//  && add title and date to top of list in /archive
//else if no post name/date or text => red text "please fill in all the boxes"


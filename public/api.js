const api = require("express").Router();
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");
const uuid = require("./helpers/uuid");

api.get("/notes", (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit notes`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, "./db/db.json");

    console.log("Response Logged!");
  } else {
    console.log("Error in posting note");
  }
});
module.exports = api;

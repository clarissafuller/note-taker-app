const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

notes.get("/notes", (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile("./db.json").then((data) => res.json(JSON.parse(data)));
});

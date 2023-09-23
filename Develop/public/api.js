const api = require("express").Router();
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");
const uuid = require("./helpers/uuid");

api.get("/notes", (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

module.exports = api;

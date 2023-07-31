const { Router } = require("express");
const {
  getAllDogsHandler,
  getDogbyIdHandler,
  postDogHandler,
  delDogbyIdHandler,
} = require("../handlers/DogsHandler.js");
const dogsRouter = Router();

dogsRouter.get("/", getAllDogsHandler);
dogsRouter.get("/:id", getDogbyIdHandler);
dogsRouter.delete("/:id", delDogbyIdHandler);
dogsRouter.post("/", postDogHandler);

module.exports = dogsRouter;

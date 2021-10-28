const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// NOTE: Please don't make any changes to this array
const memes = [
  {
    name: "Money meme",
    imgSource:
      "https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png",
    genre: ["comedy", "dark", "witty"],
    id: "0",
  },
  {
    name: "Coding meme",
    imgSource:
      "https://pics.esmemes.com/my-code-doesnt-work-i-have-no-idea-why-my-21449922.png",
    genre: ["dark", "witty"],
    id: "1",
  },
  {
    name: "Javascript meme",
    imgSource:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvryRQ8Ot0OUHU1FEVbV2UHiCI5CQ3Hbm8cw&usqp=CAU",
    genre: ["comedy", "dark", "witty"],
    id: "2",
  },
];

app.get("/memes", (req, res) => {
  res.send(memes);
});

app.get("/meme/:id", (req, res) => {
  const meme = memes.find((meme) => meme.id === req.params.id);
  if (!meme) res.status(422).json("meme not found");
  else res.status(200).send(meme);
});

app.get("/memes/filter", (req, res) => {
  const { genre } = req.query;
  if (!genre) {
    res.status(400).json("invalid query parameter");
  } else {
    const filteredMemes = memes.filter((meme) => meme.genre.includes(genre));
    res.status(200).send(filteredMemes);
  }
});

app.post("/memes", (req, res) => {
  const { name, imgSource, genre } = req.body;
  if (!name || !imgSource || !genre) {
    return res.status(400).json("cannot create meme due to missing details");
  } else {
    const newMeme = { name, imgSource, genre, id: memes.length.toString() };
    memes.push(newMeme);
    res.status(201).send(newMeme);
  }
});

app.put("/meme/:id", (req, res, next) => {
  const memeIndex = memes.findIndex((meme) => meme.id === req.params.id);
  if (memeIndex === -1) {
    res.status(422).json("meme not found");
  } else {
    memes[memeIndex] = req.body;
    res.status(200).send(memes[memeIndex]);
  }
});

app.delete("/meme/:id", (req, res) => {
  const memeIndex = memes.findIndex((meme) => meme.id === req.params.id);
  if (memeIndex === -1) {
    res.status(422).json("meme not found");
  } else {
    const filteredMemes = memes.filter((meme) => meme.id !== req.params.id);
    res.status(200).send(filteredMemes);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});

module.exports = app;

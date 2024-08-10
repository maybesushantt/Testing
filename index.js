const express = require('express');
const app = express();

app.get('/check-visibility', (req, res) => {
  const isVisible = true; // Change this to false to make the site invisible
  res.json({ visible: isVisible });
});

module.exports = app;

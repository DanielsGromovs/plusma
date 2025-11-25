const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => console.log('Server running on port 3000'));

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error
      throw new Error('Database error!');
    } else {
      res.send('Hello, world!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
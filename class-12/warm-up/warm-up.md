# Warm-Up Exercise
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```
const express = ('express');
const app = express();

const cors = ('cors');
app.use('cors');

const superagent = ('superagent');

const PORT = process.env.PORT;

app.get('/books', getBooks);

async function getBooks(request, response) {
  superagent
    .get(url)
    .then(results => {
      response.status(400).send(results.data);
    })
}
```

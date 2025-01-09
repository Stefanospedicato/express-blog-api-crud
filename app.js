const express = require('express');
const postsRouter = require('./routers/posts');
const notFound = require('./middlewares/notFound');
const showError = require('./middlewares/showError');

const app = express();
const port = 3000

app.use(express.json());

app.get('/' , (req,res) => {
  res.send('Server attivo')
})

app.use('/posts' , postsRouter);

app.use(showError);

// app.use(notFound);

app.listen(port , () => {
  console.log('Ascolto...');
})
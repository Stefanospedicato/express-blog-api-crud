const express = require('express');
const postsRouter = require('./routers/posts');
const notFound = require('./middlewares/notFound');
const showError = require('./middlewares/showError');
const cors= require('cors')
const app = express();
const port = 3000

app.use(cors({origin:'http://localhost:5173'}))

app.use(express.json());

app.use(express.static('public'))

app.get('/' , (req,res) => {
  res.send('Server attivo')
})

app.use('/posts' , postsRouter);

app.use(showError);

// app.use(notFound);

app.listen(port , () => {
  console.log('Ascolto...');
})
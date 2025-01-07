const express = require('express');
const postsRouter = require('./routers/posts')
const app = express();
const port = 3000

app.get('/' , (req,res) => {
  res.send('Server attivo')
})

app.use('/posts' , postsRouter)

app.listen(port , () => {
  console.log('Ascolto...');
})
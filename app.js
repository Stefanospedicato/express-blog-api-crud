const express = require('express');

const app = express();
const port = 3000

app.get('/' , (req,res) => {
  res.send('Server attivo')
})

app.listen(port , () => {
  console.log('Ascolto...');
})
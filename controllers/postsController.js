const posts = require('../posts')

const index = (req,res) => {
  res.send('Elenco posts')
}
const show = (req,res) => {
  res.send('Visualizzo un post')
}
const store = (req,res) => {
  res.send('Aggiungo un post')
}
const update = (req,res) => {
  res.send('Modifico un post con id' + req.params.id)
}
const modify = (req,res) => {
  res.send('Modifica parziale di un post con id' + req.params.id)
}
const destroy = (req,res) => {
  res.send('Elimino posts')
}

module.exports = {
  index,
  show, 
  store,
  update,
  modify,
  destroy
}
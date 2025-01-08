const posts = require('../data/posts')

const index = (req,res) => {
  let filteredPosts = posts;

  if(req.query.tags){
    filteredPosts = posts.filter(post => post.tags.includes(req.query.tags))
  }
  res.json(filteredPosts)
}

const show = (req,res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id);
  if(!post){
    res.status(404)
    return res.json({
      message: 'Questo post non esiste',
      status: 404,
      error: 'Not Found'
    })
  }
  res.json(post)
}

const store = (req,res) => {
  const id = posts.at(-1).id + 1;
  const newPost = {
    id,
    ...req.body
  }
  posts.push(newPost);
  res.status(201);
  res.json(posts)
}

const update = (req,res) => {
  res.send('Modifico un post con id' + req.params.id)
}

const modify = (req,res) => {
  res.send('Modifica parziale di un post con id' + req.params.id)
}

const destroy = (req,res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id)
 
  if(!post){
    res.status(404)
    return res.json({
      message: 'Questo post non esiste',
      status: 404,
      error: 'Not Found'
    })
  } 

  posts.splice(posts.indexOf(post) , 1)
  res.sendStatus(204)
  console.log(posts);
  
}

module.exports = {
  index,
  show, 
  store,
  update,
  modify,
  destroy
}

const posts = require('../data/posts')

const index = (req,res) => {
  //inesistente();
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
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if(!post){
    res.status(404);
    return {
      message : 'Post non trovato',
      status : 404,
      error : 'Not Found'
    }
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.tags = req.body.tags;
  post.image = req.body.image;

  res.json(post)
}

const modify = (req,res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  if(!post){
    res.status(404);
    return {
      message : 'Post non trovato',
      status : 404,
      error : 'Not Found'
    }
  }
  for(let key in req.body){
    post[key] = req.body[key]
  }

  res.json(post)
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

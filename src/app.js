const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const Joi = require('joi')
const schema = require('./schema')

const notes = [{title: 'Nota 1', id: '1', description: 'estudiar express framework'}, {title: 'Nota 2', id: '2', description: 'pasear al perro'}]
//notes should have a title, id and a description

app.use(express.json())
app.get('/api', (req,res)=>{
  res.send('Welcome')
})

app.get('/api/notes', (req,res)=>{
  res.send(items)
})

app.get('/api/note/:id', (req,res)=> {
  const note = notes.find( element => element.id === req.params.id)
  res.send(note)
})

app.post('/api/note', (req,res)=>{
  res.send(schema.validate(req.body))
})

app.delete('api/note', (req,res)=>{
  res.send('DELETE request to page')
})

app.listen(port, ()=> {
  console.log(`Server listening on port: ${port}`)
})

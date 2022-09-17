import express from 'express'

const app = express()


app.get('/ads', ( request, response) =>{
  return response.json([
    {id: 1, name: 'camis'},
    {id: 2, name: 'teixe'}
  ])
})

app.listen(3333) 
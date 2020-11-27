const express = require('express')
const app = express()
const port = 4000

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('./db')

//query builder!! -> ORM Sequelize, JOOQ...
app.get('/:id', (req, response, next) => {   
  db.query('SELECT * FROM tentti WHERE id = $1', [req.params.id], (err, res) => {
    if (err) {
      return next(err)
    }
    response.send(res.rows[0])
  })
})
app.get('/tentit/:id', (req, res, next) => {      
    db.query('SELECT * FROM tentti WHERE id = $1', [req.params.veskuloiri], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  })
  app.post('/tentit/:id/kysymykset/:is2', (req, res, next) => {      
    db.query('INSERT...$1   $2', [req.params.id],[req.params.id], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  })
  
// ... many other routes in this file

app.get('/', (req, res) => {
    res.send('Hello World! GET')
})

app.post('/', (req, res) => {
    res.send('Hello World! POST')
    
})
app.delete('/', (req, res) => {
    res.send('Hello World! DELETE')
})

app.put('/', (req, res) => {
    res.send('Hello World! PUT')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
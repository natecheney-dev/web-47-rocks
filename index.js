require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send(`
    <h1>Web 47 rocks!</h1>
  `)
})
app.get('/port', (req,res)=>{
    res.send(`<div>port is ${process.env.PORT}</div>`)
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

function web47rocks(){
    console.log(process.argv.slice(2))
    console.log(`web ${process.argv[2]}`)
}
function cohortRocksEnv(){
    console.log(`home folder is ${process.env.HOME}`)
    console.log(`username folder is ${process.env.USERNAME}`)
    console.log(`OS folder is ${process.env.OS}`)
    console.log(`In my envionment FOO is "${process.env.FOO}"`)
}
cohortRocksEnv()

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors')
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.listen(8090,()=>{
    console.log('express Started at http://localhost:8090')
})

//const  response = getPokemon();

app.get('/', async (req, res) => {
    const pokemon = await getPokemon();
    return res.json(pokemon);
  });

async function getPokemon() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=10')
  return response.data;
}
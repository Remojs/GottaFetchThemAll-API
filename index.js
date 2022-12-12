const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 9000;
require('./database/conexion');
const app = express();
const pokemonController = require('./controllers/personaController')

//Middelwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('common'));


app.get('/datos', async (req, res) => {
    res.json({
        datos: await pokemonController.findAll()
    });
});

app.post('/crear', async (req, res) => {
    const { id, name, image, first_type, second_type, ability, height, weight, stats } = req.body;
    console.log(`${id} - ${name} - ${image} - ${first_type} - ${second_type} - ${ability} - ${height} - ${weight} - ${stats}`);

    await pokemonController.create(req.body)

    res.send('MERN SYSTEM: Pokemon Creado con exito')
})

app.delete('/:id', (req, res) => {
    res.send('MERN SYSTEM: Pokemon Eliminado con exito')
})

app.put('/:id', (req, res) => {
    res.send('MERN SYSTEM: Pokemon Actualizado con exito')
})

app.listen(PORT, ()=>{
    console.log(`MERN trabajando en el Puerto ${PORT}`);
});


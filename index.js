const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./database/conexion');
const router = require("./routes/index.routes");
const PORT = process.env.PORT || 9000

const app = express();

// Middelwares
app.use(cors());
app.use(morgan('common'));
app.use("/", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`MERN trabajando en el Puerto ${PORT}`);
});

module.exports = app;

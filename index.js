const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./database/conexion');
const router = require("./routes/index.routes");
const PORT = process.env.PORT || 9000

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
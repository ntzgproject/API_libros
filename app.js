const express = require('express');
const app = express();
app.use(express.json());

const librosRouter = require('./routes/libros');

const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
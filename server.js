const express = require('express');
const app = express();
const {Router} = require('express');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**Router */

routerApi = Router()
app.use('/api', routerApi);

const productos = [
    {
        "id": 1,
        "title": "Producto 1",
        "price": 10,
        "thumbnail": "www.algo.algo"
    }
];

routerApi.get('/productos', (req, res) => {
    res.json(productos);
});

routerApi.post('/productos', (req, res) => {
    productos.push(req.body);
    res.json(productos)
})






















/**Server port */
const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
server.on('error', error => console.log(`Errro en servidor ${error}`));
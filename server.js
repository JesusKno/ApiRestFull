const express = require('express');
const app = express();
const {Router} = require('express');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**Router */
const productos = []
routerApi = Router()
app.use('/api', routerApi);
routerApi.get('/productos', (req, res) => {
    res.send(productos)
});

routerApi.post('/productos', (req, res) => {
    const response = addProduct(req.body);
    res.json(response)
});

routerApi.put('/update/productos', (req, res) => {
    const response = updateProduct(req.body);
    res.json(response)
});

/**Server port */
const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
server.on('error', error => console.log(`Errro en servidor ${error}`));

/**Functions */

function addProduct(product) {
    if (product) {
        const id = productos.length + 1;
        productos.push({
            "id": id,
            "title": product.title,
            "price": product.price,
            "thumbnail": product.thumbnail
        });

        return productos
    }
}

function updateProduct(product) {
    if (product) {
        const productId = product.map((productId) = productId.id);
        const index = productos.findIndex(id => id === productId)
        productos[index].push({
            "id": id,
            "title": product.title,
            "price": product.price,
            "thumbnail": product.thumbnail
        });

        return productos[index]
    }
}
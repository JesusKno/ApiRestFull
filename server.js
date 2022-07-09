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

routerApi.get('/producto', (req, res) => {
    const response = getProduct(req.body);
    res.json(response)
});

routerApi.post('/productos', (req, res) => {
    const response = addProduct(req.body);
    res.json(response)
});

routerApi.put('/update/productos', (req, res) => {
    const response = updateProduct(req.body);
    res.json(response)
});

routerApi.delete('/delete/productos', (req, res) => {
    const response = deleteProduct(req.body);
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
        if(productos.length != 0) {

            const posicion = productos.length -1
            const id = productos[posicion].id + 1;
            productos.push({
                "id": id,
                "title": product.title,
                "price": product.price,
                "thumbnail": product.thumbnail
            });

        }else {

            const id = productos.length + 1;
            productos.push({
                "id": id,
                "title": product.title,
                "price": product.price,
                "thumbnail": product.thumbnail
            });

        }

        return productos
    }
}

function updateProduct(product) {
    if (product) {
        index = productos.findIndex((producto) => producto.id === product.id)
        productos[index].id = product.id;
        productos[index].title = product.title;
        productos[index].price = product.price;
        productos[index].thumbnail = product.thumbnail;

        return productos
    }
}

function deleteProduct(product) {
    if (product) {
        index = productos.findIndex((producto) => producto.id === product.id)
        productos.splice(index, 1);

        return productos
    }
}

function getProduct(id) {
    if (id) {
        index = productos.findIndex((producto) => producto.id === id.id)

        return productos[index]
    }
}
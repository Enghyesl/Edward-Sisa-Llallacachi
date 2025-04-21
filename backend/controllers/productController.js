const ProductService = require('../services/productService');

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await ProductService.getProducts();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los productos' });
        }
    }

    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductService.getProductById(id);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el producto' });
        }
    }    

    async createProduct(req, res) {
        try {
            const { nombre, precio, descripcion } = req.body;
            const newProduct = await ProductService.addProduct({ nombre, precio, descripcion });
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el producto' });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { nombre, precio, descripcion } = req.body;
            const updateProduct = await ProductService.modifyProduct(id, { nombre, precio, descripcion });
            res.json(updateProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el producto' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await ProductService.removeProduct(id); 
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el producto' });
        }
    }
}

module.exports = new ProductController();
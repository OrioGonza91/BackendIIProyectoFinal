import ProductsRepository from '../repositories/productsRepository.js';

const productsRepository = new ProductsRepository();

// Crear producto
export const createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const newProduct = await productsRepository.createProduct({ name, price, stock });
        return res.status(201).json({ message: 'Producto creado con éxito', product: newProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el producto', error });
    }
};

// Actualizar producto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedProduct = await productsRepository.updateProduct(id, updatedData);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.json({ message: 'Producto actualizado', product: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productsRepository.deleteProduct(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.json({ message: 'Producto eliminado', product: deletedProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
};

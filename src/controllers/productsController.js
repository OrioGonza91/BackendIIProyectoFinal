import ProductsRepository from "../repositories/productsRepository.js";

const productsRepository = new ProductsRepository()

export const getAllProducts = async (req, res) =>{
    const products = await productsRepository.getAllProducts()
    res.json(products)
}

export const getProductById = async (req, res) =>{
    const { id } = req.params
    try {
        const product = await productsRepository.getProductById(id)
        if(!product){
            return res.status(404).json({ message: 'Producto no encontrado' })
        } 
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
}

export const createProduct = async (req, res) =>{
    const newProduct = await productsRepository.createProduct(req.body)
    res.json(newProduct)
}


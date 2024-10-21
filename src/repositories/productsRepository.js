import ProductDao from "../daos/productsDao.js";

class ProductsRepository {
    constructor(){
        this.productsDao = new ProductDao()
    }

    async getAllProducts(){
        return await this.productsDao.getAll()
    }

    async getProductById(id){
        return await this.productsDao.getById(id)
    }

    async createProduct(productData){
        return await this.productsDao.create(productData)
    }

    async updateProduct(id, productData){
        return await this.productsDao.update(id, productData)
    }

    async deleteProduct(id){
        return await this.productsDao.delete(id)
    }
}

export default ProductsRepository;
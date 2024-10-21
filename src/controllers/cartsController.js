import ProductsRepository from '../repositories/productsRepository.js';
import TicketsRepository from '../repositories/ticketsRepository.js';

const productsRepository = new ProductsRepository();
const ticketsRepository = new TicketsRepository();

export const finalizePurchase = async (req, res) => {
    const { cid } = req.params;
    const cart = await getCartById(cid); 
    let totalAmount = 0;
    let purchasedItems = [];

    for (const cartItem of cart.items) {
        const product = await productsRepository.getProductById(cartItem.productId);

        if (!product || product.stock < cartItem.quantity) {
        
            return res.status(400).json({ message: `El producto ${product.name} no tiene stock suficiente.` });
        }

        
        product.stock -= cartItem.quantity;
        await productsRepository.updateProduct(product._id, product);
        
        
        totalAmount += product.price * cartItem.quantity;
        purchasedItems.push(product);
    }

    
    const ticket = await ticketsRepository.createTicket(totalAmount, req.user.email);

    
    await clearCartById(cid); 

    return res.json({ message: 'Compra realizada con éxito', ticket, purchasedItems });
};

const clearCartById = async (cid) => {
    
    const cart = await Cart.findById(cid);
    cart.items = [];
    await cart.save();
};

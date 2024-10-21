import ProductsRepository from '../repositories/productsRepository.js';
import TicketsRepository from '../repositories/ticketsRepository.js';

const productsRepository = new ProductsRepository();
const ticketsRepository = new TicketsRepository();

export const finalizePurchase = async (req, res) => {
    const { cid } = req.params;
    const cart = await getCartById(cid); // Función ficticia para obtener el carrito por su ID
    let totalAmount = 0;
    let purchasedItems = [];

    for (const cartItem of cart.items) {
        const product = await productsRepository.getProductById(cartItem.productId);

        if (!product || product.stock < cartItem.quantity) {
            // Si no hay suficiente stock, devolver el producto como no disponible
            return res.status(400).json({ message: `El producto ${product.name} no tiene stock suficiente.` });
        }

        // Si hay stock, restarlo y continuar con la compra
        product.stock -= cartItem.quantity;
        await productsRepository.updateProduct(product._id, product);
        
        // Calcular el total
        totalAmount += product.price * cartItem.quantity;
        purchasedItems.push(product);
    }

    // Crear el ticket después de completar la compra
    const ticket = await ticketsRepository.createTicket(totalAmount, req.user.email);

    // Limpiar el carrito
    await clearCartById(cid); // Función ficticia para vaciar el carrito

    return res.json({ message: 'Compra realizada con éxito', ticket, purchasedItems });
};

const clearCartById = async (cid) => {
    // Lógica para vaciar el carrito después de la compra
    const cart = await Cart.findById(cid);
    cart.items = [];
    await cart.save();
};

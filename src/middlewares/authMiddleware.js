const authMiddleware = (req, res, next) =>{
    const user = req.user
    
    if(!user){
        return res.status(401).json({ message: 'No autorizado' })
    }

    if(req.path.includes('/products') && !user.isAdmin){
        return res.status(403).json({ message: 'Acción permitida solo para administradores' })
    }

    if(req.path.includes('/cart') && user.isAdmin){
        return res.status(403).json({ message: 'Acción permitida solo para usuarios' })
    }

    next();
}

export default authMiddleware;
const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next(); // Permitir acceso si es administrador
    }
    return res.status(403).json({ message: 'Acceso denegado. Se requieren privilegios de administrador.' });
};

export default adminMiddleware;
const formatDinero = dinero => dinero.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });

export {
    formatDinero
}
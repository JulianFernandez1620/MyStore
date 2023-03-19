from app.model.producto import Producto
from app.repository.base_repo import BaseRepo

class ProductoRepository(BaseRepo):
    model = Producto
from app.model.devolucion import Devolucion
from app.repository.base_repo import BaseRepo

class DevolucionRepository(BaseRepo):
    model = Devolucion
    
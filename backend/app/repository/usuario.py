from app.model.usuario import Usuario
from app.repository.base_repo import BaseRepo

class UsuarioRepository(BaseRepo):
    model = Usuario
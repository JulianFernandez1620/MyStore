from sqlalchemy.future import select
from app.model.usuario import Usuario
# from app.model.vendedor import Vendedor
from app.config import db

class UsuarioService:

    @staticmethod
    async def get_user_profile(nombre:str):
        query = select(Usuario.username, 
                        Usuario.correo, 
                        Usuario.tipo)
        return(await db.execute(query)).mappings().one()
from sqlalchemy.future import select
from app.model import Usuario, Vendedor
from app.config import db

class UsuarioService:

    @staticmethod
    async def get_user_profile(nombre:str):
        query = select(Usuario.username, 
                        Usuario.correo, 
                        Usuario.tipo, 
                        Vendedor.nombre_tienda,
                        Vendedor.rues,
                        Vendedor.id_vendedor).join_from(Usuario,Vendedor).where(Vendedor.id_vendedor == Usuario.id)
        return(await db.execute(query)).mappings().one()
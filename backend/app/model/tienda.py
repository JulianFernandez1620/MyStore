from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.productos import Producto
from app.model.vendedor import Vendedor

# esto es un ejemplo de posibles suscripciones


class Tienda(SQLModel, TimeMixin, table=True):
    __tablename__ = "tienda"
    
    id_tienda       : Optional[int] = Field(None, primary_key=True,nullnable=False)
    nombre_tienda   : str 
    direccion       : str
    vendedor        : Vendedor
    productos       : List[Producto]
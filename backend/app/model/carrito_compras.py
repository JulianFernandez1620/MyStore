from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.productos import Producto

# esto es un ejemplo de posibles suscripciones


class Carrito_compra(SQLModel, TimeMixin, table=True):
    __tablename__ = "carrito_compras"
    
    id_carrito      : Optional[int] = Field(None, primary_key=True,nullable=False)
    productos       : List[Producto]
    id_comprador    : Optional[int] = Field(default=None, foreign_keys=True ="comprador.id_comprador")

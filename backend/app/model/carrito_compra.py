# from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field
from app.model.mixins import TimeMixin
from app.model.producto import Producto
from typing import Optional
# esto es un ejemplo de posibles suscripciones


class Carritocompra(SQLModel, TimeMixin, table=True):
    __tablename__ = "carrito_compras"
    
    id_carrito      : Optional[int] = Field(None, primary_key=True,nullable=False)
    producto        : str
    id_comprador    : Optional[int] = Field(default=None, foreign_key="comprador.id_comprador")
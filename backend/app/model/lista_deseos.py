from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.productos import Producto

# esto es un ejemplo de posibles suscripciones


class Lista_deseos(SQLModel, TimeMixin, table=True):
    __tablename__ = "lista_deseos"
    
    id_lista_deseos : Optional[int] = Field(None, primary_key=True,nullnable=False)
    productos       : List[Producto]
    id_comprador    : Optional[int] = Field(default=None, foreign_key="comprador.id_comprador", nullnable=False)
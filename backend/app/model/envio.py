from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin

class Envio(SQLModel, TimeMixin, table=True):
    __tablename__ = "envio"
    
    id_envio            : Optional[int] = Field(None, primary_key=True,nullnable=False)
    direccion_entrega   : Optional[str] = Field(default=None, foreign_key="comprador.direccion", nullnable=False)
    direccion_emision   : Optional[str] = Field(default=None, foreign_key="tienda.direccion", nullnable=False)
    fecha_envio         : datetime
    fecha_entrega       : datetime
    transportista       : str
    precio              : float
    id_producto         : Optional[int] = Field(default=None, foreign_key="producto.id_producto", nullnable=False)
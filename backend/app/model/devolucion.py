from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.envio import Envio

class Devolucion(SQLModel, TimeMixin, table=True):
    __tablename__ = "devolucion"
    
    id_devolucion   : Optional[int] = Field(None, primary_key=True,nullable=False)
    fecha_solicitud : datetime
    envio           : Envio
    id_producto     : Optional[int] = Field(default=None, foreign_key="producto.id_producto", nullable=False)
    id_vendedor     : Optional[int] = Field(default=None, foreign_key="vendedor.id_vendedor", nullable=False)
    id_comprador    : Optional[int] = Field(default=None, foreign_key="comprador.id_comprador", nullable=False)
    razon           : str
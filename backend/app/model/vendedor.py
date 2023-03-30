from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from typing import Optional

class Vendedor(SQLModel, TimeMixin, table=True):
    __tablename__ = "vendedor"
    id_vendedor         : Optional[int] = Field(None, primary_key=True,nullable=False)
    nombre_tienda       : str
    rues                : int
    historial_ventas    : str
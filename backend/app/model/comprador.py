from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.compra import Compra
from typing import Optional

class Comprador(SQLModel, TimeMixin, table=True):
    __tablename__ = "comprador"

    id_comprador        : Optional[int] = Field(None, primary_key=True,nullable=False)
    direccion           : str
    telefono            : int
    historial_compras   : str
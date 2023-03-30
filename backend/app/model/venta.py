from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.producto import Producto
from typing import Optional

class estado(str, Enum):
    pendiente   = "Pendiente de envio"
    transito    = "Esta siendo transportado"
    cancelado   = "Cancelado"
    finalizado  = "Finalizado"


class Venta(SQLModel, TimeMixin, table=True):
    __tablename__ = "venta"
    id_venta        : Optional[int] = Field(None, primary_key=True,nullable=False)
    fecha           : datetime
    total           : int
    estado          : estado
    id_vendedor     : Optional[int] = Field(default=None, foreign_key="vendedor.id_vendedor", nullable=False)
    producto        : str
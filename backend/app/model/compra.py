from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.producto import Producto
class estado(str, Enum):
    pendiente   = "Pendiente de envio"
    transito    = "Esta siendo transportado"
    cancelado   = "Cancelado"
    finalizado  = "Finalizado"


class Compra(SQLModel, TimeMixin, table=True):
    __tablename__ = "compra"
    id_compra       : Optional[int] = Field(None, primary_key=True,nullable=False)
    fecha           : datetime
    total           : int
    estado          : estado
    id_comprador    : Optional[int] = Field(default=None, foreign_key = "comprador.id_comprador")
    productos       : list[Producto]
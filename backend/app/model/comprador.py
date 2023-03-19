from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.compar import Compra

class Comprador(SQLModel, TimeMixin, table=True):
    __tablename__ = "comprador"

    id_comprador        : Optional[int] = Field(None, primary_key=True,nullnable=False)
    direccion           : str
    telefono            : int
    historial_compras   : List[Compra]
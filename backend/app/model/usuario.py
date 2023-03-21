from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin


class Tipo(str, Enum):
    VENDEDOR    = "vendedor"
    COMPRADOR   = "comprador"

class Usuario(SQLModel, TimeMixin, table=True):
    __tablename__ = "usuario"
    id          : int = Field(None, primary_key=True,nullable=False)
    nombre      : str
    correo      : str
    contrasena  : str
    tipo        : Tipo  

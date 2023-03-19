from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.producto import Producto

# esto es un ejemplo de posibles suscripciones
class TipoSuscripcion(str,Enum):
    basico          = "Comprador basico"
    frecuente       = "Comprador frecuente"
    administrativo  = "Administrativo"

class estadoSuscripcion(str,Enum):
    activo      = "Activo"
    inactivo    = "Inactivo"

class Suscripcion(SQLModel, TimeMixin, table=True):
    __tablename__ = "suscripcion"
    
    id_suscripcion  : Optional[int] = Field(None, primary_key=True,nullnable=False)
    fecha_inicio    : datetime 
    fecha_final     : datetime
    precio          : float
    tipo            : TipoSuscripcion
    estado          : estadoSuscripcion
    producto        : Producto
    id_usuario      : Optional[int] = Field(default=None, foreign_key="usuario.id", nullnable=False)
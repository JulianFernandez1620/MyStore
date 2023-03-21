from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from app.model.productos import Producto

# esto es un ejemplo de posibles suscripciones

class TipoPlantilla(str, Enum):
    MODA        = "Plantillas de moda y ropa"
    TECNOLOGIA  = "Plantillas de tecnología"
    INSUMOS     = "Plantillas de alimentos y bebidas"
    HOGAR       = "Plantillas de decoración y hogar"
    DEPORTE     = "Plantillas de deportes y ocio"

class Plantilla(SQLModel, TimeMixin, table=True):
    __tablename__ = "Plantilla"
    
    id_plantilla : Optional[int] = Field(None, primary_key=True,nullable=False)
    nombre      : str 
    descripción : str
    secciones   : List[Object]
    diseno      : string
    tipo        : TipoPlantilla
    url         : Optional[str]
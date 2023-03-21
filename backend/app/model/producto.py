from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin

class Producto(SQLModel, TimeMixin, table=True):
    __tablename__ = "producto"
    
    id_producto     : Optional[int] = Field(None, primary_key=True,nullable=False)
    nombre_producto : str 
    descripcion     : str
    precio          : float
    ilustracion     : List[image]
from pydantic import BaseModel
from datetime import date

class Producto(BaseModel):
    nombre : str
    descripcion : str
    precio : float
    ilustracion : str
from datetime import datetime
from sqlalchemy import Enum
from sqlmodel import SQLModel, Field, Relationship
from app.model.mixins import TimeMixin
from typing import Optional

# esto es un ejemplo de posibles suscripciones


class Listadeseos(SQLModel, TimeMixin, table=True):
    __tablename__ = "lista_deseos"
    
    id_lista_deseos : Optional[int] = Field(None, primary_key=True,nullable=False)
    producto        : str
    id_comprador    : Optional[int] = Field(default=None, foreign_key="comprador.id_comprador", nullable=False)
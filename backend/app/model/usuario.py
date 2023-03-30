from sqlalchemy import Column, Integer, String
from database import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    cellphone = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)  

from fastapi import HTTPException
import logging
import re
from typing import TypeVar, Optional

from pydantic import BaseModel, validator
from sqlalchemy import false
from app.model.usuario import Tipo

T = TypeVar('T')

# get root logger
logger = logging.getLogger(__nombre__)


class RegisterSchema(BaseModel):
    nombre : str
    correo      : str
    contrasena  : str
    tipo        : Tipo

class LoginSchema(BaseModel):
    nombre: str
    contrasena: str


class ForgotPasswordSchema(BaseModel):
    correro: str
    contrasena_nueva: str


class DetailSchema(BaseModel):
    status: str
    message: str
    result: Optional[T] = None


class ResponseSchema(BaseModel):
    detail: str
    result: Optional[T] = None
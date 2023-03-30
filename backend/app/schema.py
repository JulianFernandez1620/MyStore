from fastapi import HTTPException
import logging
import re
from typing import TypeVar, Optional

from pydantic import BaseModel, validator
from sqlalchemy import false
# from app.model.person import Sex


T = TypeVar('T')

# get root logger
logger = logging.getLogger(__name__)


class User(BaseModel):
    name: str
    email: str
    cellphone : str
    password: str

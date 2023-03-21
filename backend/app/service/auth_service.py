import base64
from datetime import datetime
from uuid import uuid4
from fastapi import HTTPException

from passlib.context import CryptContext
from app.schema import RegisterSchema
from app.model.usuario import Usuario
from app.repository.usuario import UsuarioRepository
from app.schema import LoginSchema, ForgotPasswordSchema
from app.repository.auth_repo import JWTRepo


# Encrypt password
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class AuthService:

    @staticmethod
    async def register_service(register: RegisterSchema):

        #Create a uuid for users
        _usuario_id = str(uuid4())

        # birth_date = datetime.strptime(register.birth, '%d-%m-%Y') 
        # Estructura para en el futuro cambiar fechas de string a ese formato

        _usuario = Usuario(id=_usuario_id, nombre=register.nombre, correo=register.correo, contrasena=pwd_context.hash(register.contrasena),tipo=register.tipo)

        _nombre = await UsuarioRepository.find_by_username(register.nombre)
        if _nombre:
            raise HTTPException(
                status_code=400, detail="Nombre de usuario ya existente!")

        _email = await UsuarioRepository.find_by_email(register.correo)
        if _email:
            raise HTTPException(
                status_code=400, detail="Correo ya registrado!")
        else:
            await UsuarioRepository.create(**_usuario.dict())

    @staticmethod
    async def login_service(login: LoginSchema):
        _nombre = await UsuarioRepository.find_by_username(login.nombre)

        if _nombre is not None:
            if not pwd_context.verify(login.contrasena, _nombre.contrasena):
                raise HTTPException(
                    status_code=400, detail="Invalid Password !")
            return JWTRepo(data={"nombre": _nombre.nombre}).generate_token()
        raise HTTPException(status_code=404, detail="Nombre de usuario no encontrado")
    
    async def generate_role():
        _role = await RoleRepository.find_by_list_role_name(["vendedor", "comprador"])
        if not _role:
            await RoleRepository.create_list(
                [Role(id=str(uuid4()), role_name="vendedor"), Role(id=str(uuid4()), role_name="comprador")])
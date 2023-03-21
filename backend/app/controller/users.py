from fastapi import APIRouter,Depends,Security

from app.schema import ResponseSchema, RegisterSchema, LoginSchema, ForgotPasswordSchema
from app.repository.auth_repo import JWTBearer, JWTRepo
from fastapi.security import HTTPAuthorizationCredentials
from app.service.usuario import UsuarioService

router = APIRouter(
    prefix="/usuario",
    tags=['usuario'],
    dependencies=[Depends(JWTBearer())]
)


@router.post("/", response_model=ResponseSchema, response_model_exclude_none=True)
async def get_user_profile(credentials: HTTPAuthorizationCredentials = Security(JWTBearer())):
    token = JWTRepo.extract_token(credentials)
    result = await UsuarioService.get_user_profile(token['nombre'])
    return ResponseSchema(detail="Successfully fetch data!", result=result)
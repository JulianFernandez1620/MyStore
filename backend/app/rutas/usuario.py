from fastapi import APIRouter
from app.model.usuario import User, UserLogin
import asyncpg

router = APIRouter(
    prefix= "/users",
    tags=["Users"]
)

@router.get("/users/{user_id}")
async def leer_usuario(user_id: int):
    query = "SELECT id, name, email, cellphone, password FROM usuario WHERE id = $1"
    row = await router.db_connection.fetchrow(query, user_id)
    if row:
        return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
    else:
        return {"message": "Usuario no encontrado"}
        
@router.put("/users/{user_id}")
async def actualizar_usuario(user_id: int, user: User):
    query = "UPDATE usuario SET name = $1, email = $2, cellphone =$3, password = $4 WHERE id = $5 RETURNING id, name, email, cellphone, password"
    values = (user.name, user.email, user.cellphone, user.password, user_id)
    row = await router.db_connection.fetchrow(query, *values)
    if row:
        return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
    else:
        return {"message": "Usuario no encontrado"}

@router.delete("/users/{user_id}")
async def eliminar_usuario(user_id: int):
    query = "DELETE FROM usuario WHERE id = $1 RETURNING id, name, email, cellphone, password"
    row = await router.db_connection.fetchrow(query, user_id)
    if row:
        return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
    else:
        return {"message": "Usuario no encontrado"}
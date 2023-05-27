from fastapi import APIRouter
from app.model.envio import Envio

router = APIRouter(
    prefix= "/envio",
    tags=["Envio"]
)

# Bloque de funciones CRUD para envio #

@router.post("/envio")
async def crear_envio(envio: Envio):
    query = "INSERT INTO envio (direccion_entrega, direccion_origen, transportista, precio, id_producto) VALUES ($1::text, $2::text, $3::text, $4::numeric, $5::integer) RETURNING id, direccion_entrega, direccion_origen, transportista, precio, id_producto"
    values = (envio.direccion_entrega, envio.direccion_origen, envio.transportista, envio.precio, envio.id_producto)
    row = await router.db_connection.fetchrow(query, *values)
    return {"id": row[0], "direccion_entrega": row[1], "direccion_origen": row[2], "transportista": row[3], "precio": row[4], "id_producto" : row[5]}

@router.get("/envio/{envio_id}")
async def leer_envio(envio_id: int):
    query = "SELECT id, direccion_entrega, direccion_origen, transportista, precio, id_producto FROM envio WHERE id = $1"
    row = await router.db_connection.fetchrow(query, envio_id)
    if row:
        return {"id": row[0], "direccion_entrega": row[1], "direccion_origen": row[2], "transportista": row[3], "precio": row[4], "id_producto" : row[5]}
    else:
        return {"message": "Envio no encontrado"}

@router.put("/envio/{envio_id}")
async def actualizar_envio(envio_id: int, envio: Envio):
    query = "UPDATE envio SET direccion_entrega = $1, direccion_origen = $2, transportista =$3, precio = $4,  id_producto = $5 WHERE id = $6 RETURNING id, direccion_entrega, direccion_origen, transportista, precio, id_producto"
    values = (envio.direccion_entrega, envio.direccion_origen, envio.transportista, envio.precio, envio.id_producto, envio_id)
    row = await router.db_connection.fetchrow(query, *values)
    if row:
        return {"id": row[0], "direccion_entrega": row[1], "direccion_origen": row[2], "transportista": row[3], "precio": row[4], "id_producto" : row[5]}
    else:
        return {"message": "Envio no encontrado"}

@router.delete("/envio/{envio_id}")
async def borrar_envio(envio_id: int):
    query = "DELETE FROM envio WHERE id = $1 RETURNING id, direccion_entrega, direccion_origen, transportista, precio, id_producto"
    row = await router.db_connection.fetchrow(query, envio_id)
    if row:
        return {"id": row[0], "direccion_entrega": row[1], "direccion_origen": row[2], "transportista": row[3], "precio": row[4], "id_producto" : row[5]}
    else:
        return {"message": "Envio no encontrado"}

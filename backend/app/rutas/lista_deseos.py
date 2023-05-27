from fastapi import APIRouter
from app.model.lista_deseos import ListaDeseos

router = APIRouter(
    prefix= "/lista-de-deseos",
    tags=["Lista de deseos"]
)

# Bloque de funciones CRUD para lista de deseos #

@router.post("/lista-de-deseos")
async def crear_lista_de_deseos(lista: ListaDeseos):
    productos = lista.productos.split(", ")
    query = "INSERT INTO lista_deseos (productos, id_comprador) VALUES ($1::text[], $2::integer) RETURNING id, productos, id_comprador"
    values = (productos,lista.id_comprador)
    row = await router.db_connection.fetchrow(query, *values)
    return {"id": row[0], "productos": row[1], "id_comprador": row[2]}

@router.get("/lista-de-deseos/{lista_id}")
async def leer_lista_de_deseos(lista_id: int):
    query = "SELECT id, productos, id_comprador FROM lista_deseos WHERE id = $1"
    row = await router.db_connection.fetchrow(query, lista_id)
    if row:
        return {"id": row[0], "productos": row[1], "id_comprador": row[2]}
    else:
        return {"message": "Lista de deseos no encontrada"}

@router.put("/lista-de-deseos/{lista_id}")
async def actualizar_lista_de_deseos(lista_id: int, lista: ListaDeseos):
    productos = lista.productos.split(", ")
    query = "UPDATE lista_deseos SET productos = $1, id_comprador = $2 WHERE id = $3 RETURNING id, productos, id_comprador"
    values = (productos,lista.id_comprador)
    row = await router.db_connection.fetchrow(query, *values)
    if row:
        return {"id": row[0], "productos": row[1], "id_comprador": row[2]}
    else:
        return {"message": "Lista de deseos no encontrada"}

@router.delete("/lista-de-deseos/{lista_id}")
async def borrar_lista_de_deseos(lista_id: int):
    query = "DELETE FROM lista_deseos WHERE id = $1 RETURNING id, productos, id_comprador"
    row = await router.db_connection.fetchrow(query, lista_id)
    if row:
        return {"id": row[0], "productos": row[1], "id_comprador": row[2]}
    else:
        return {"message": "Lista de deseos no encontrada"}

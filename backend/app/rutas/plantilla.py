from fastapi import APIRouter
from app.model.plantilla import Plantilla

router = APIRouter(
    prefix= "/plantilla",
    tags=["Plantilla"]
)

# Bloque de funciones CRUD para plantilla #

@router.post("/plantila")
async def crear_plantilla(plantilla: Plantilla):
    secciones = plantilla.secciones.split(", ")
    query = "INSERT INTO plantilla (nombre, descripcion, secciones, diseño, tipo, url) VALUES ($1::text, $2::text, $3::text[], $4::text, $5::text, $6::text) RETURNING id, nombre, descripcion, secciones, diseño, tipo, url"
    values = (plantilla.nombre,plantilla.descripcion, secciones, plantilla.diseño, plantilla.tipo, plantilla.url)
    row = await router.db_connection.fetchrow(query, *values)
    return {"id": row[0], "nombre": row[1], "descripcion": row[2], "secciones": row[3], "diseño": row[4], "tipo": row[5], "url": row[6]}

@router.get("/plantilla/{plantilla_id}")
async def leer_plantilla(plantilla_id: int):
    query = "SELECT id, nombre, descripcion, secciones, diseño, tipo, url FROM plantilla WHERE id = $1"
    row = await router.db_connection.fetchrow(query, plantilla_id)
    if row:
        return {"id": row[0], "nombre": row[1], "descripcion": row[2], "secciones": row[3], "diseño": row[4], "tipo": row[5], "url": row[6]}
    else:
        return {"message": "Plantilla no encontrada"}

@router.put("/plantilla/{plantilla_id}")
async def actualizar_plantilla(plantilla_id: int, plantilla: Plantilla):
    query = "UPDATE plantilla SET nombre = $1, descripcion = $2, secciones =$3, diseño = $4, tipo = $5, url = $6 WHERE id = $3 RETURNING id, nombre, descripcion, secciones, diseño, tipo, url"
    values = (plantilla.nombre,plantilla.descripcion, plantilla.secciones, plantilla.diseño, plantilla.tipo, plantilla.url)
    row = await router.db_connection.fetchrow(query, *values)
    if row:
        return {"id": row[0], "nombre": row[1], "descripcion": row[2], "secciones": row[3], "diseño": row[4], "tipo": row[5], "url": row[6]}
    else:
        return {"message": "Plantilla no encontrada"}

@router.delete("/plantilla/{plantilla_id}")
async def borrar_plantilla(plantilla_id: int):
    query = "DELETE FROM plantilla WHERE id = $1 RETURNING id, nombre, descripcion, secciones, diseño, tipo, url"
    row = await router.db_connection.fetchrow(query, plantilla_id)
    if row:
        return {"id": row[0], "nombre": row[1], "descripcion": row[2], "secciones": row[3], "diseño": row[4], "tipo": row[5], "url": row[6]}
    else:
        return {"message": "Plantilla no encontrada"}
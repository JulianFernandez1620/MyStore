import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncpg

origins= [
    "http://localhost:3000"
]
app = FastAPI()
def init_app():

    app = FastAPI(
        title= "MyStore",
        description= "Pagina  de ingreso",
        version= "0.9.12"
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )

    @app.on_event("startup")
    async def startup():
        app.db_connection = await connect_db()

    @app.on_event("shutdown")
    async def shutdown():
        await app.db_connection.close()

    class User(BaseModel):
        name: str
        email: str
        cellphone : str
        password: str

    async def connect_db():
        conn = await asyncpg.connect(user='postgres', password='8VEU5ABZS9wm9.MC', database='test', host='localhost')
        return conn

    @app.on_event("startup")
    async def startup():
        app.db_connection = await connect_db()

    @app.on_event("shutdown")
    async def shutdown():
        await app.db_connection.close()

    @app.post("/users")
    async def create_user(user: User):
        query = "INSERT INTO users (name, email, cellphone, password) VALUES ($1::text, $2::text, $3::text, $4::text) RETURNING id, name, email, cellphone, password"
        values = (user.name, user.email, user.cellphone, user.password)
        row = await app.db_connection.fetchrow(query, *values)
        return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}


    @app.get("/users/{user_id}")
    async def read_user(user_id: int):
        query = "SELECT id, name, email, cellphone, password FROM users WHERE id = $1"
        row = await app.db_connection.fetchrow(query, user_id)
        if row:
            return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
        else:
            return {"message": "User not found"}

    @app.put("/users/{user_id}")
    async def update_user(user_id: int, user: User):
        query = "UPDATE users SET name = $1, email = $2 cellphone =$4 password = $5 WHERE id = $3 RETURNING id, name, email"
        values = (user.name, user.email, user_id, user.cellphone, user.password)
        row = await app.db_connection.fetchrow(query, *values)
        if row:
            return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
        else:
            return {"message": "User not found"}

    @app.delete("/users/{user_id}")
    async def delete_user(user_id: int):
        query = "DELETE FROM users WHERE id = $1 RETURNING id, name, email, cellphone, password"
        row = await app.db_connection.fetchrow(query, user_id)
        if row:
            return {"id": row[0], "name": row[1], "email": row[2], "cellphone": row[3], "password": row[4]}
        else:
            return {"message": "User not found"}

    return app

app = init_app()

def start():
    """Launched with 'poetry run start' at root level """
    uvicorn.run("app.main:app", host="localhost", port=8888, reload=True)
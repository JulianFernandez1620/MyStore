import uvicorn
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from app.config import db

origins = [
    "https://localhost:3000"
]

def init_app():
    db.init()

    app = FastAPI(
        title= "MyStore",
        description= "Backend for login and password authentication",
        version= "0.1.0"
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods= ["*"],
        allow_headers= ["*"]
    )

    @app.on_event("startup")
    async def starup():
        await db.create_all()
        #await generar_tipo()
    
    @app.on_event("shutdown")
    async def shutdown():
        await db.close()
    
    return app

    from app.controller import authentication, users

    app.include_router(authentication.router)
    app.include_router(users.router)
app = init_app()

def start():
    """Launched with 'poetry run start' at root level"""
    uvicorn.run("app.main:app", host="localhost", port=8888, reload=True)
from app.model.plantilla import Plantilla, TipoPlantilla
from app.repository.base_repo import BaseRepo

class PlantillaRepository(BaseRepo):
    model = Plantilla

    @staticmethod
    async def find_by_tipo_plantilla(tipo_plantilla:str):
        query = select(Plantilla).where(TipoPlantilla.tipo_plantilla == tipo_plantilla)
        return (await db.execute(query)).scalar_one_or_none()
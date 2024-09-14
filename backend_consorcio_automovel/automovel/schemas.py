from ninja import Schema
from typing import Optional

class AutomovelSchema(Schema):
    chassi: str
    modelo: str
    nome: str
    preco: float
    cor: str
    
class AutomovelUpdateSchema(Schema):
    modelo: Optional[str]
    nome: Optional[str]
    preco: Optional[float]
    cor: Optional[str]
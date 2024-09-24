from ninja import Schema

class ClienteSchema(Schema):
    nome: str
    cpf: str
    telefone: str
    email: str
    endereco: str
    
class ClienteUpdateSchema(Schema):
    nome: str
    telefone: str
    email: str
    endereco: str
from ninja import Schema

class ClienteSchema(Schema):
    nome: str
    cpf: str
    telefone: str
    email: str
    endereco: str
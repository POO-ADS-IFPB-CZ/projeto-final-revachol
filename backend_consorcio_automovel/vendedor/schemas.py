from ninja import Schema
from pydantic import BaseModel

class VendedorSchema(Schema):
    username: str
    password: str
    email: str
    first_name: str
    last_name: str

class VendedorResponseSchema(BaseModel):
    sucess: str
    username: str

class LoginSchema(Schema):
    username: str
    password: str


class LoginResponseSchema(BaseModel):
    success: str
    username: str
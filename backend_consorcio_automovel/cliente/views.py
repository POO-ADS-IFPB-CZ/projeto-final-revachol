from ninja import NinjaAPI
from ninja.errors import HttpError
from cliente.controllers import ClienteController
from cliente.schemas import ClienteSchema


class ClienteView:
    def __init__(self):
        self.api = NinjaAPI(version="cliente_v1")
        self.register_routes()
        
    def register_routes(self):
        @self.api.post("/cadastrar")
        def cadastrar_cliente(request, data: ClienteSchema):
            if request.user.is_authenticated:
                ClienteController.criar_cliente(data)
                return {"success": "Cliente cadastrado com sucesso"}
            else:
                raise HttpError(401, "Unauthorized")
    
cliente_api = ClienteView()
api = cliente_api.api
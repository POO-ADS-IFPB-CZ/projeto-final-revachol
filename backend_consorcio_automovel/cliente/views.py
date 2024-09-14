from ninja import NinjaAPI
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
                cliente = ClienteController.criar_cliente(data)
                
                if cliente is None:
                    return {"status": 400, "message": "Cliente já cadastrado"}
            
                return {"success": "Cliente cadastrado com sucesso"}
            else:
                return {"status": 401, "message": "Autenticação necessária"}
    
cliente_api = ClienteView()
api = cliente_api.api
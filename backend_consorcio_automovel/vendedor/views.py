from django.http import HttpRequest
from ninja import NinjaAPI
from .controllers import VendedorController
from .schemas import VendedorSchema, LoginSchema

class VendedorView:
    def __init__(self):
        self.api = NinjaAPI(version="vendedor_v1")
        self.register_routes()

    def register_routes(self):

        @self.api.post("/cadastrar")
        def cadastrar_vendedor(request: HttpRequest, data: VendedorSchema):
            if not request.user.is_staff:
                return {"status": 401, "message": "Autenticação necessária"}
            
            vendedor = VendedorController.criar_vendedor(data)
            
            if vendedor is None:
                return {"status": 400, "message": "Vendedor já cadastrado"}
            
            return {"sucess": "Vendedor cadastrado com sucesso"}
    
        @self.api.post("/login")
        def login_vendedor(request: HttpRequest, data: LoginSchema):
            user = VendedorController.login_vendedor(request, data)
            if user is not None:
                return {"success": "User autenticado"}
            else:
                return {"status": 401, "message": "User não autenticado"}
            
        @self.api.post("/logout")
        def logout_vendedor(request: HttpRequest):
            if not request.user.is_authenticated:
                return {"status": 401, "message": "Autenticação necessária"}
            else:
                VendedorController.logout_vendedor(request)
                return {"message": "Logout realizado com sucesso"}
        
vendedor_view = VendedorView()
api = vendedor_view.api
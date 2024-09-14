from django.http import HttpRequest
from ninja import NinjaAPI
from ninja.errors import HttpError
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
                raise HttpError(403, "Entre como administrador para cadastrar um vendedor")
            
            VendedorController.criar_vendedor(data)
            return {"sucess": "Vendedor cadastrado com sucesso"}
    
        @self.api.post("/login")
        def login_vendedor(request: HttpRequest, data: LoginSchema):
            user = VendedorController.login_vendedor(request, data)
            if user is not None:
                return {"success": "User autenticado"}
            else:
                raise HttpError(401, "Unauthorized")
            
        @self.api.post("/logout")
        def logout_vendedor(request: HttpRequest):
            if not request.user.is_authenticated:
                raise HttpError(401, "User não autenticado")
            else:
                VendedorController.logout_vendedor(request)
                return {"message": "Logout realizado com sucesso"}
        
vendedor_view = VendedorView()
api = vendedor_view.api
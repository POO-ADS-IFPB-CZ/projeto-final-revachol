from django.http import JsonResponse
from ninja import NinjaAPI
from .controllers import VendedorController
from .schemas import VendedorSchema, LoginSchema
from django.middleware.csrf import get_token

class VendedorView:
    def __init__(self):
        self.api = NinjaAPI(version="vendedor_v1")
        self.register_routes()

    def register_routes(self):

        @self.api.post("/cadastrar")
        def cadastrar_vendedor(request, data: VendedorSchema):
            if not request.user.is_staff:
                return JsonResponse({"status": 401, "message": "Autenticação necessária como administrador"}, status=401)
            vendedor = VendedorController.criar_vendedor(data)
                         
            if vendedor is None:
                return JsonResponse({"status": 400, "message": "Vendedor já cadastrado"}, status=400)
            
            return JsonResponse({"success": "Vendedor cadastrado com sucesso"}, status=201)
    
        @self.api.post("/login")
        def login_vendedor(request, data: LoginSchema):
            user = VendedorController.login_vendedor(request, data)       
            if user is not None:
                return JsonResponse({"success": "User autenticado", "isStaff":(request.user.is_staff)}, status=200)
            else:
                return JsonResponse({"status": 401, "message": "Senha ou User incorretos"}, status=401)
            
        @self.api.post("/logout")
        def logout_vendedor(request):
            if not request.user.is_authenticated:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
            else:
                VendedorController.logout_vendedor(request)
                return JsonResponse({"message": "Logout realizado com sucesso"}, status=200)
        
vendedor_view = VendedorView()
api = vendedor_view.api
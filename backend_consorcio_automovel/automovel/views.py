from automovel.schemas import AutomovelSchema, AutomovelUpdateSchema
from .controllers import AutomovelController
from ninja import NinjaAPI, File
from ninja.files import UploadedFile
from django.http import JsonResponse, HttpRequest

class AutomovelView:
    def __init__(self):
        self.api = NinjaAPI(version="automovel_v1")
        self.register_routes()
        
    def register_routes(self):
        @self.api.get("/listar")
        def listar_automoveis(request):
            if request.user.is_authenticated:
                automoveis = AutomovelController.listar_automoveis()
                if automoveis is None:
                    return JsonResponse({"status": 404, "message": "Nenhum automóvel cadastrado"}, status=404)
                
                return JsonResponse({"automoveis": automoveis})
            else:    
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.get("/buscar/{nome}")
        def buscar_automovel(request, nome: str):
            if request.user.is_authenticated:
                automovel = AutomovelController.buscar_automovel(nome)
                if automovel is None:
                    return JsonResponse({"status": 404, "message": "Automóvel não encontrado"}, status=404)
                return JsonResponse({"automovel": automovel})
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.post("/cadastrar")
        def cadastrar_automovel(request, data: AutomovelSchema, image: UploadedFile = File(...)):
            if request.user.is_authenticated:
                automovel = AutomovelController.criar_automovel(data, image)
                if automovel is None:
                    return JsonResponse({"status": 400, "message": "Automóvel já cadastrado"}, status=400)
                return JsonResponse({"success": "Automóvel cadastrado com sucesso"})
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.put("/atualizar/{chassi}")
        def atualizar_automovel(request: HttpRequest, chassi: str, data: AutomovelUpdateSchema):
            if request.user.is_authenticated:
                automovel = AutomovelController.atualizar_automovel(chassi, data)
                if automovel:
                    return JsonResponse({"success": "Automóvel atualizado com sucesso"})
                return JsonResponse({"status": 404, "message": "Automóvel não encontrado"}, status=404)
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.delete("/deletar/{chassi}")
        def deletar_automovel(request: HttpRequest, chassi: str):
            if request.user.is_authenticated:
                verificar_automovel = AutomovelController.buscar_automovel(chassi)
                if verificar_automovel:
                    AutomovelController.deletar_automovel(chassi)
                    return JsonResponse({"success": "Automóvel deletado com sucesso"})
                else:
                    return JsonResponse({"status": 404, "message": "Automóvel não encontrado"}, status=404)
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
            
automovel_api = AutomovelView()
api = automovel_api.api
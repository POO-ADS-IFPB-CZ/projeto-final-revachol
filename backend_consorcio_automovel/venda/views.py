from ninja import NinjaAPI
from venda.controllers import VendaController
from venda.schemas import VendaSchema
from django.http import JsonResponse

class VendaView:
    def __init__(self):
        self.api = NinjaAPI(version="venda_v1")
        self.register_routes()
        
    def register_routes(self):
        @self.api.get("/listar")
        def listar_vendas(request):
            if request.user.is_authenticated:
                vendas = VendaController.listar_vendas(request)
                return JsonResponse({"vendas": vendas})
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.post("/cadastrar")
        def cadastrar_venda(request, data: VendaSchema):
            if request.user.is_authenticated:
                venda = VendaController.criar_venda(request, data)
                if venda:
                    return JsonResponse({"success": "Venda cadastrada com sucesso"}, status=201)
                return JsonResponse({"error": "Erro ao cadastrar venda"}, status=400)
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
        @self.api.delete("/deletar/{codigo_venda}")
        def deletar_venda(request, codigo_venda: int):
            if request.user.is_authenticated:
                result = VendaController.deletar_venda(request, codigo_venda)
                if result is None:
                    return JsonResponse({"status": 404, "message": "Venda não encontrada"}, status=404)
                elif result:
                    return JsonResponse({"success": "Venda deletada com sucesso"}, status=200)
                else:
                    return JsonResponse({"status": 403, "message": "Permissão negada"}, status=403)
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
        
venda_api = VendaView()
api = venda_api.api
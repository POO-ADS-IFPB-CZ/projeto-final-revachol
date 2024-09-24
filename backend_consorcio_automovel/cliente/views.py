from ninja import NinjaAPI
from cliente.controllers import ClienteController
from cliente.schemas import ClienteSchema, ClienteUpdateSchema
from django.http import JsonResponse


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
            
        @self.api.get("/listar")
        def listar_cliente(request):
            if request.user.is_authenticated:
                clientes = ClienteController.listar_cliente()
                return JsonResponse({"clientes": clientes})
            else:
                return {"status": 401, "message": "Autenticação necessária"}    
        
        @self.api.put("/atualizar/{cpf}")
        def atualizar_cliente(request, data: ClienteUpdateSchema, cpf: str):
            if request.user.is_authenticated:
                cliente = ClienteController.atualizar_cliente(data, cpf)
                if cliente:
                    return JsonResponse({"sucess": "Cliente atualizado com sucesso"})
                return JsonResponse({"status": 404, "message": "Cliente não encontrado"}, status=404)
            else:
                return {"status": 401, "message": "Autenticação necessária"}  
            
        @self.api.delete("/deletar/{cpf}")
        def deletar_cliente(request, cpf: str):
            if request.user.is_authenticated:
                verificar_cliente = ClienteController.buscar_cliente_por_cpf(cpf)
                if verificar_cliente is not None:
                    ClienteController.deletar_cliente(cpf)
                    return JsonResponse({"success": "Cliente deletado com sucesso"})
                else:
                    return JsonResponse({"status": 404, "message": "Cliente não encontrado"}, status=404)
            else:
                return JsonResponse({"status": 401, "message": "Autenticação necessária"}, status=401)
    
cliente_api = ClienteView()
api = cliente_api.api
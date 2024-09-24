from venda.models import Venda
from django.contrib.auth.models import User
from cliente.models import Cliente
from automovel.models import Automovel
from automovel.controllers import AutomovelController

class VendaController:
    @staticmethod
    def criar_venda(request, data):
        vendedor = User.objects.get(username=request.user.username)
        cliente = Cliente.objects.get(cpf=data.cpf_cliente)
        automovel_object = Automovel.objects.get(chassi=data.chassi_automovel)
        automovel = automovel_object.chassi
        preco = automovel_object.preco
        venda = Venda.objects.create(
                username_vendedor=vendedor,
                cpf_cliente=cliente,
                chassi_automovel=automovel,
                preco=preco
        )
        AutomovelController.deletar_automovel(automovel)
        return venda
    
    @staticmethod
    def listar_vendas(request):
        if request.user.is_staff:
            vendas = Venda.objects.all()
        else:
            vendas = Venda.objects.filter(username_vendedor=request.user)
        if not vendas:
            return None
        return list(vendas.values())
    
    @staticmethod
    def deletar_venda(request, codigo_venda):
        try:
            venda = Venda.objects.get(codigo_venda=codigo_venda)
            if request.user.is_staff or venda.username_vendedor == request.user:
                venda.delete()
                return True
            else:
                return False
        except Venda.DoesNotExist:
            return None
    

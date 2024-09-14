from venda.models import Venda
from django.contrib.auth.models import User
from cliente.models import Cliente
from automovel.models import Automovel

class VendaController:
    @staticmethod
    def criar_venda(data):
        vendedor = User.objects.get(username=data.username_vendedor)
        cliente = Cliente.objects.get(cpf=data.cpf_cliente)
        automovel = Automovel.objects.get(chassi=data.chassi_automovel)
        venda = Venda.objects.create(
                username_vendedor=vendedor,
                cpf_cliente=cliente,
                chassi_automovel=automovel
        )
        return venda
    
    @staticmethod
    def listar_vendas():
        vendas = Venda.objects.all()
        if not vendas:
            return None
        return list(vendas.values())
    
    @staticmethod
    def deletar_venda(codigo_venda):
        try:
            venda = Venda.objects.get(codigo_venda=codigo_venda)
            venda.delete()
        except Venda.DoesNotExist:
            return None
    

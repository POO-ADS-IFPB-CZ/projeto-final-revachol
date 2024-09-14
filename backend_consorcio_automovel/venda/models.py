from django.db import models
from django.contrib.auth.models import User
from cliente.models import Cliente
from automovel.models import Automovel

class Venda(models.Model):
    codigo_venda = models.AutoField(primary_key=True)
    username_vendedor = models.ForeignKey(User, to_field='username', on_delete=models.DO_NOTHING)
    cpf_cliente = models.ForeignKey(Cliente, to_field='cpf', on_delete=models.DO_NOTHING)
    chassi_automovel = models.ForeignKey(Automovel, to_field='chassi', on_delete=models.DO_NOTHING)
    data_venda = models.DateTimeField(auto_now_add=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    
    def __str__(self):
        return f"Venda {self.codigo_venda}: {self.chassi_automovel} vendido por {self.username_vendedor} para {self.cpf_cliente}"
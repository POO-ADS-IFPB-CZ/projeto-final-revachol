from cliente.models import Cliente

class ClienteController:
    @staticmethod
    def criar_cliente(data):
        verificar_cliente = Cliente.objects.filter(cpf=data.cpf).exists()
        if verificar_cliente:
            return None
        cliente = Cliente(
            nome=data.nome,
            cpf=data.cpf,
            telefone=data.telefone,
            email=data.email,
            endereco=data.endereco,
        )
        cliente.save()
        return cliente
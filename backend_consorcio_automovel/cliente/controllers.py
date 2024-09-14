from cliente.models import Cliente

class ClienteController:
    @staticmethod
    def criar_cliente(data):
        cliente = Cliente(
            nome=data.nome,
            cpf=data.cpf,
            telefone=data.telefone,
            email=data.email,
            endereco=data.endereco,
        )
        cliente.save()
        return cliente
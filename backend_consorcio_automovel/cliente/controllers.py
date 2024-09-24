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
    
    @staticmethod
    def listar_cliente():
        clientes = Cliente.objects.all()
        if not clientes:
            return None
        return list(clientes.values())
    
    @staticmethod
    def buscar_cliente_por_cpf(cpf):
        try:
            cliente = Cliente.objects.filter(cpf=cpf)
            if cliente:
                return list(cliente.values())
            else:
                return None
        except cliente.DoesNotExist:
            return None
    
    @staticmethod
    def atualizar_cliente(data, cpf):
        try:
            cliente = Cliente.objects.get(cpf=cpf)
        except cliente.DoesNotExist:
            return None
        
        if data.nome is not None:
            cliente.nome= data.nome
        if data.telefone is not None:
            cliente.telefone = data.telefone
        if data.email is not None:
            cliente.email = data.email
        if data.endereco is not None:
            cliente.endereco = data.endereco
        cliente.save()
        return cliente
        
    @staticmethod
    def deletar_cliente(cpf):
        try:
            cliente = Cliente.objects.get(cpf=cpf)
            cliente.delete()
        except cliente.DoesNotExist:
            return None
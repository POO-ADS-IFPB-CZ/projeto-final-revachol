from .models import Automovel

class AutomovelController:
    
    @staticmethod
    def criar_automovel(data, image):
        if Automovel.objects.filter(chassi=data.chassi).exists():
            return None
        automovel = Automovel(
            chassi=data.chassi,
            modelo=data.modelo,
            nome=data.nome,
            preco=data.preco,
            cor=data.cor,
            imagem=image
        )
        automovel.save()
        return automovel
    
    @staticmethod
    def listar_automoveis():
        automoveis = Automovel.objects.all()
        if not automoveis:
            return None
        return list(automoveis.values())
    
    @staticmethod
    def buscar_automovel(nome):
        try:
            automovel = Automovel.objects.filter(nome=nome)
            if automovel:
                return list(automovel.values())
            else:
                return None
        except Automovel.DoesNotExist:
            return None
    
    @staticmethod
    def buscar_automovel_por_chassi(chassi):
        try:
            automovel = Automovel.objects.filter(chassi=chassi)
            if automovel:
                return list(automovel.values())
            else:
                return None
        except Automovel.DoesNotExist:
            return None
    
    @staticmethod
    def deletar_automovel(chassi):
        try:
            automovel = Automovel.objects.get(chassi=chassi)
            automovel.delete()
        except Automovel.DoesNotExist:
            return None
    
    @staticmethod
    def atualizar_automovel(chassi, data):
        try:
            automovel = Automovel.objects.get(chassi=chassi)
        except Automovel.DoesNotExist:
            return None
        
        if data.modelo is not None:
            automovel.modelo = data.modelo
        if data.nome is not None:
            automovel.nome = data.nome
        if data.preco is not None:
            automovel.preco = data.preco
        if data.cor is not None:
            automovel.cor = data.cor
        automovel.save()
        return automovel
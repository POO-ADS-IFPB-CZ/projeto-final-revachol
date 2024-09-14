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
        return list(automoveis.values())
    
    @staticmethod
    def buscar_automovel(nome):
        automovel = Automovel.objects.get(nome=nome)
        return list(automovel.values())
    
    @staticmethod
    def deletar_automovel(chassi):
        automovel = Automovel.objects.get(chassi=chassi)
        automovel.delete()
        
    @staticmethod
    def atualizar_automovel(data):
        automovel = Automovel.objects.get(chassi=data.chassi)
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
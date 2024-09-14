from django.db import models

class Automovel(models.Model):
    chassi = models.CharField(max_length=17, primary_key=True)
    modelo = models.CharField(max_length=100)
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    cor = models.CharField(max_length=50)
    imagem = models.ImageField(upload_to='automoveis/', null=True, blank=True) 
    
    def __str__(self):
        return self.nome
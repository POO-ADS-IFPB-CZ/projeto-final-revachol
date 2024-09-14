from django.urls import path
from .views import api as api_venda

urlpatterns = [
    path('', api_venda.urls, name='venda_api'), 
]

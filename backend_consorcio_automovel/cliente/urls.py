from django.urls import path
from .views import api as api_cliente

urlpatterns = [
    path('', api_cliente.urls, name='cliente_api'), 
]

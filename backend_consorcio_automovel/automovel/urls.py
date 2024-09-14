from django.urls import path
from .views import api as api_automovel

urlpatterns = [
    path('', api_automovel.urls, name='automovel_api'), 
]

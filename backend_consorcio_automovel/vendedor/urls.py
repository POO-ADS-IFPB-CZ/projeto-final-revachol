from django.urls import path
from .views import api as vendedor_api

urlpatterns = [
    path('', vendedor_api.urls, name='vendedor_api'),
]

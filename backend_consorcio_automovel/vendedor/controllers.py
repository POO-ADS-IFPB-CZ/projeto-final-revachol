from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.models import User

class VendedorController:
    @staticmethod
    def criar_vendedor(data):
        if User.objects.filter(username=data.username).exists():
            return None
        vendedor = User.objects.create_user (
            username=data.username,
            password=data.password,
            email=data.email,
            first_name=data.first_name,
            last_name=data.last_name,
        )
        return vendedor
    
    @staticmethod
    def login_vendedor(request, data):
        user = authenticate(username=data.username, password=data.password)
        if user is not None and not request.user.is_authenticated:
            login(request, user)
        return user
            
    @staticmethod
    def logout_vendedor(request):
        logout(request)
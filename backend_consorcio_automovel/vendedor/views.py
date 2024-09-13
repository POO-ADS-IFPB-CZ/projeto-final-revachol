from ninja import NinjaAPI

class VendedorView:
    def __init__(self):
        self.api = NinjaAPI(version="1.1.0")
        self.register_routes()

    def register_routes(self):
        pass
        
vendedor_view = VendedorView()
api = vendedor_view.api
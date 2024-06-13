from django.urls import path, include
from . import views
from .views import ObtainTokenView
from .views import SignupView
from .views import SalaListView
from .views import SalaReservadaListView
from rest_framework.routers import DefaultRouter
from .views import AgendamentoViewSet

router = DefaultRouter()
router.register(r'agendamentos', AgendamentoViewSet)

urlpatterns = [
    path('', views.homepage, name="home"),         # Inclui as urls do app blog
    path('cadastroUsuario', views.cadastroUsuario, name='cadastroUsuario'),
    path('login', views.login, name='login'),
    path('faq', views.faq, name="faq"),
    path('faqAdmin', views.faqAdmin, name="faqAdmin"),
    path('faqProfessor', views.faqProfessor, name="faqProfessor"),
    path('homepageAdmin', views.homepageAdmin, name='homepageAdmin'),
    path('homepageProfessor', views.homepageProfessor, name='homepageProfessor'),
    path('logout', views.logout_view, name='logout'),
    
    path('api/token/', ObtainTokenView.as_view(), name='token_obtain'),
    path('api/signup/', SignupView.as_view(), name='signup'),   
    path('api/salas/', SalaListView.as_view(), name='sala-list'),
    path('api/salas-reservadas/', SalaReservadaListView.as_view(), name='sala-reservada-list'),
    path('api/', include(router.urls)),
]

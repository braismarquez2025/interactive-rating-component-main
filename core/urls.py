from django.urls import path
from . import views
from .views import principalView, finalView

urlpatterns = [
    path('', principalView, name='principal'),
    path('thanks/', finalView, name='final'),
]
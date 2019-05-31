from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListChallenge.as_view()),
    path('<int:pk>/', views.DetailChallenge.as_view()),
]
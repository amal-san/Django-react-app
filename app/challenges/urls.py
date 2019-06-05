from django.urls import path
from . import views
from .views import *
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import verify_jwt_token



urlpatterns = [
    path('', views.ListChallenge.as_view()),
    path('<int:pk>/', views.DetailChallenge.as_view()),
    path('api-token/', obtain_jwt_token),
    path('api-token-verify/',verify_jwt_token)
]

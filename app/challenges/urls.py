from django.urls import path,include
from . import views
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('challenges',views.ChallengeView)

urlpatterns = [
    path('',include(router.urls))
]

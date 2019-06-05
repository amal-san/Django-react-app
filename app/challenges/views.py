from rest_framework import generics

from .models import Challenge
from .serializers import ChallengeSerializer
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status



class ListChallenge(generics.ListCreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class DetailChallenge(generics.RetrieveUpdateDestroyAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


from rest_framework import generics

from .models import Challenge
from .serializers import ChallengeSerializer


class ListChallenge(generics.ListCreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class DetailChallenge(generics.RetrieveUpdateDestroyAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer